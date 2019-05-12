<?php

namespace App\Streamers;

class ApacheStreamer extends Streamer
{
    /**
     * Redirect the stream request to the resource directly
     * by utilizing the X-Sendfile header.
     */
    public function stream()
    {
        header('X-Sendfile: '.$this->song->path);
        header('Content-Type: '.$this->contentType);
        header('Contact-Disposition: inline;  filename="'.basename($this->song->path).'"');

        exit;
    }
}