<?php

namespace AxiomLabs\Music\Console\Commands;

use getID3;
use Illuminate\Console\Command;
use AxiomLabs\Music\Models\Song;
use AxiomLabs\Music\Models\Album;
use AxiomLabs\Music\Models\Artist;
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

    /**
     * Create a new command instance.
     *
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
        $processedPath = '/Users/kai/Music/Axiom/Processed';
        $files         = $this->findMedia('/Users/kai/Music/Axiom/Unprocessed');

        foreach ($files as $file) {
            $extension   = $file->getExtension();
            $information = $this->getID3->analyze($file);
            $tags        = $information['tags']['id3v2'];
            
            $length = $information['playtime_seconds'];
            $mtime  = $file->getmTime();
            $artist = $tags['artist'][0];
            $album  = $tags['album'][0];
            $title  = $tags['title'][0];
            $track  = sprintf("%02d", $tags['track_number'][0]);
            $year   = $tags['years'] ?? null;
            $disc   = $tags['part_of_a_set'][0] ?? '1';

            $path     = "{$processedPath}/{$artist}/{$album}";
            $filename = "{$artist} - {$track} - {$title}.{$extension}";
            $fullPath = $path.'/'.$filename;

            if (! Song::where('path', $fullPath)->first()) {
                $this->filesystem->mkdir($path);
                $this->filesystem->copy($file, $fullPath);

                $artist = $this->findOrCreateArtist($artist);
                $album  = $this->findOrCreateAlbum($artist, $album);

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

    private function findMedia($path)
    {
        return iterator_to_array($this->finder->create()
            ->files()
            ->followLinks()
            ->name('/\.(mp3|ogg|m4a|flac)$/i')
            ->in($path));
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

    private function findOrCreateAlbum($artist, $name)
    {
        if (! $album = $artist->albums()->where('name', $name)->first()) {
            $album = new Album;
            $album->name = $name;
            $artist->albums()->save($album);
        }

        return $album;
    }
}
