<?php

namespace App\Console\Commands;

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

        $this->finder  = $finder;
        $this->getID3  = $getID3;
        $this->filesystem = $filesystem;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $mediaPath = config('music.media_path');
        $uploads   = $this->getUploads();

        foreach ($uploads as $file) {
            $extension   = $file->getExtension();
            $information = $this->getID3->analyze($file);

            getid3_lib::CopyTagsToComments($information);

            $tags = $information['tags']['id3v2'];
            
            $length = $information['playtime_seconds'];
            $mtime  = $file->getmTime();
            $artist = $tags['artist'][0];
            $album  = $tags['album'][0];
            $title  = $tags['title'][0];
            $track  = sprintf("%02d", $tags['track_number'][0]);
            $year   = $tags['years'] ?? null;
            $disc   = $tags['part_of_a_set'][0] ?? '1';
            
            $path     = "{$mediaPath}/{$artist}/{$album}";
            $filename = "{$artist} - {$track} - {$title}.{$extension}";
            $fullPath = $path.'/'.$filename;

            if (! Song::where('path', $fullPath)->first()) {
                $this->filesystem->mkdir($path);
                $this->filesystem->copy($file, $fullPath);

                $artist = $this->findOrCreateArtist($artist);
                $album  = $this->findOrCreateAlbum($artist, $album, $information);
                
                $song = new Song;
                
                $song->title  = $title;
                $song->track  = $track;
                $song->disc   = $disc;
                $song->length = $length;
                $song->mtime  = $mtime;
                $song->path   = $fullPath;
                
                $album->songs()->save($song);
            }
        }
    }

    private function getUploads()
    {
        return iterator_to_array($this->finder->create()
            ->files()
            ->followLinks()
            ->name('/\.(mp3|ogg|m4a|flac)$/i')
            ->in(config('music.upload_path')));
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

    private function findOrCreateAlbum($artist, $name, $information)
    {
        if (! $album = $artist->albums()->where('name', $name)->first()) {
            $album = new Album;
            $album->name = $name;
            $album = $artist->albums()->save($album);
        }

        $cover = $information['comments']['picture'][0];

        if ($cover) {
            $extension = explode('/', $cover['image_mime'])[1];
            $contents  = $cover['data'];
            $filename  = $album->id.'.'.$extension;
            
            Storage::put('public/covers/'.$filename, $contents);
    
            $album->cover = $filename;
            $album->save();
        }

        return $album;
    }
}
