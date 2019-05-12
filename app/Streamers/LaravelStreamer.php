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
        $response = new BinaryFileResponse($this->song->path);

        BinaryFileResponse::trustXSendfileTypeHeader();

        return $response;

        exit;
    }
}