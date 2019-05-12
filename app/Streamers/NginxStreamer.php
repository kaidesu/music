<?php

namespace App\Streamers;

class NginxStreamer extends Streamer
{
    /**
     * Redirect the stream request to the resource directly
     * by utilizing Nginx's X-Accel-Redirect header.
     */
    public function stream()
    {
        $relativePath = $this->song->path;

        header('X-Media-Root: ');
        header('X-Accel-Redirect: /media/'.$relativePath);
        header('Content-Type: '.$this->contentType);
        header('Contact-Disposition: inline;  filename="'.basename($this->song->path).'"');

        exit;
    }
}