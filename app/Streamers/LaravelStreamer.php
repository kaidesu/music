<?php

namespace App\Streamers;

use Symfony\Component\HttpFoundation\BinaryFileResponse;

class LaravelStreamer extends Streamer
{
    /**
     * Stream through Symfony's BinaryFileResponse.
     * 
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function stream()
    {
        if (config('music.use_cloud')) {
            return;
        }

        $path     = storage_path('app/'.$this->song->path);
        $response = new BinaryFileResponse($path);

        BinaryFileResponse::trustXSendfileTypeHeader();

        return $response;

        exit;
    }
}