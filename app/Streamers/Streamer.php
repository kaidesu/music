<?php

namespace App\Streamers;

class Streamer
{
    /**
     * @var \App\Song
     */
    protected $song;

    /**
     * @var string
     */
    protected $contentType;

    /**
     * Create a new Streamer instance.
     */
    public function __construct()
    {
        // We turn off any error reporting here to ensure that our stream
        // is not interrupted by anything.
        @error_reporting(0);
    }

    public function setSong($song)
    {
        $this->song        = $song;
        $this->contentType = 'audio/' . pathinfo($this->song->path, PATHINFO_EXTENSION);
    }
}