<?php

namespace App\Factories;

use App\Song;
use App\Streamers\PHPStreamer;
use App\Streamers\NginxStreamer;
use App\Streamers\ApacheStreamer;
use App\Streamers\LaravelStreamer;

class StreamerFactory
{
    /**
     * @var \App\Streamers\Streamer
     */
    protected $streamer;

    /**
     * Create a new StreamerFactory instance.
     * 
     * @param  \App\Streamers\LaravelStreamer  $streamer
     */
    public function __construct(LaravelStreamer $streamer)
    {
        $this->streamer = $streamer;
    }

    /**
     * Build our streamer instance.
     * 
     * @param  Song  $song
     * @return \App\Streamers\Streamer
     */
    public function build(Song $song)
    {
        $this->streamer->setSong($song);

        return $this->streamer;
    }
}