<?php

namespace App\Console\Commands;

use Arr;
use getID3;
use Storage;
use App\Song;
use App\Album;
use App\Artist;
use getid3_lib;
use Illuminate\Console\Command;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Filesystem\Filesystem;

class ScanForMusic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'music:scan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scan for music to be added to the library';

    protected $finder;
    protected $getID3;
    protected $filesystem;

    /**
     * Create a new command instance.
     *
     * @param  Finder  $finder
     * @param  getID3  $getID3
     * @param  Filesystem  $filesystem
     * @return void
     */
    public function __construct(Finder $finder, getID3 $getID3, Filesystem $filesystem)
    {
        parent::__construct();

        $this->finder     = $finder;
        $this->getID3     = $getID3;
        $this->filesystem = $filesystem;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $files = $this->getUploads();

        $bar       = $this->output->createProgressBar(count($files));
        $processed = 0;
        
        $bar->start();

        foreach ($files as $file) {
            $meta = $this->getID3->analyze($file);

            getid3_lib::CopyTagsToComments($meta);

            $data = $this->buildSongData($file, $meta);
            
            if (! Song::where('path', $data->get('fullPath'))->first()) {
                $this->filesystem->mkdir($data->get('path'));
                $this->filesystem->copy($file, $data->get('fullPath'));

                $artist = $this->findOrCreateArtist($data->get('artist'));
                $album  = $this->findOrCreateAlbum($artist, $data->get('album'), $meta);
                
                $song = new Song;
                
                $song->title       = $data->get('title');
                $song->track       = $data->get('track');
                $song->disc        = $data->get('disc');
                $song->length      = $data->get('length');
                $song->mtime       = $data->get('mtime');
                $song->bitrate     = $data->get('bitrate');
                $song->path        = $data->get('fullPath');
                $song->compilation = $data->get('compilation');
                
                $album->songs()->save($song);
                $processed++;
            }

            $bar->advance();
        }

        $bar->finish();
        $this->info("\n".'Complete! Processed '.$processed.' file(s).');
    }

    private function buildSongData($file, $meta)
    {
        $song = collect([
            'length'      => $meta['playtime_seconds'],
            'mtime'       => $file->getmTime(),
            'artist'      => $this->convertEncoding($meta['comments']['artist'][0] ?? 'Unknown Artist'),
            'album'       => $this->convertEncoding($meta['comments']['album'][0] ?? 'Unknown Album'),
            'title'       => $this->convertEncoding($meta['comments']['title'][0] ?? $file->getFilename()),
            'disc'        => $this->extractDiscNumber($meta),
            'track'       => $this->extractTrackNumber($meta),
            'year'        => $this->convertEncoding($meta['comments']['year'][0] ?? null),
            'bitrate'     => round($meta['bitrate'] / 1000) ?? null,
            'compilation' => $meta['comments']['part_of_a_compilation'] ?? false,
            'extension'   => $file->getExtension(),
        ]);

        $song = $song->map(function($value) {
            if (is_string($value)) {
                return mb_convert_encoding($value, 'UTF-8', 'UTF-8');
            }

            return $value;
        });

        $song->put('path', config('music.media_path')."/{$song->get('artist')}/{$song->get('album')}");
        $song->put('filename', "{$song->get('artist')} - {$song->get('track')} - {$song->get('title')}.{$song->get('extension')}");
        $song->put('fullPath', $song->get('path').'/'.$song->get('filename'));

        return $song;
    }

    private function getUploads()
    {
        $uploads = iterator_to_array($this->finder->create()
            ->files()
            ->followLinks()
            ->name('/\.(mp3|ogg|m4a|flac)$/i')
            ->in(config('music.upload_path')));

        $found = count($uploads);

        if ($found === 0) {
            $this->info('Nothing found.');
            exit;
        }

        if ($found === 1) {
            $this->info('Found 1 upload.');
        }

        if ($found > 1) {
            $this->comment('Found '.count($uploads).' uploads.');
        }

        return $uploads;
    }

    private function findOrCreateArtist($name)
    {
        if (! $artist = Artist::where('name', $name)->first()) {
            $artist = new Artist;
            $artist->name = $name;
            $artist->save();
        }

        return $artist;
    }

    private function findOrCreateAlbum($artist, $name, $meta)
    {
        if (! $album = $artist->albums()->where('name', $name)->first()) {
            $genre = optional($meta['tags']['id3v2'])['genre'][0];
            $year  = optional($meta['tags']['id3v2'])['year'][0];

            $album = new Album;
            
            $album->name  = $this->convertEncoding($name);
            $album->year  = $this->convertEncoding($year) ?? null;
            $album->genre = $this->convertEncoding($genre) ?? null;
            
            $album = $artist->albums()->save($album);
        }

        $cover = Arr::get($meta, 'comments.picture', null);

        if ($cover) {
            $extension = explode('/', $cover[0]['image_mime'])[1];
            $contents  = $cover[0]['data'];
            $filename  = $album->id.'.'.$extension;
            
            Storage::put('public/covers/'.$filename, $contents);
    
            $album->cover = $filename;
            $album->save();
        }

        return $album;
    }

    protected function convertEncoding($string)
    {
        return mb_convert_encoding($string, 'UTF-8', 'UTF-8');
    }

    private function extractTrackNumber($meta)
    {
        $trackNumber  = 0;
        $possibleKeys = [
            'comments.track',
            'comments.tracknumber',
            'comments.track_number'
        ];

        for ($i = 0; $i < count($possibleKeys) and $trackNumber === 0; $i++) {
            $trackNumber = Arr::get($meta, $possibleKeys[$i][0], 0);
        }

        return sprintf("%02d", $trackNumber);
    }

    private function extractDiscNumber($meta)
    {
        $discNumber = Arr::get($meta, 'comments.part_of_a_set.0', 1);
        $discNumber = (int) $discNumber;

        if ($discNumber === 0) {
            $discNumber = 1;
        }

        return $discNumber;
    }
}
