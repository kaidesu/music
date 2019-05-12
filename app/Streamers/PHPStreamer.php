<?php

namespace App\Streamers;

class PHPStreamer extends Streamer
{
    /**
     * Stream the requested song through PHP's readfile() method.
     */
    public function stream()
    {
        $range = $this->getRange();
        $filesize = filesize($this->song->path);

        if ($range) {

        } else {
            $length = filesize($this->song->path);
            $partial = false;
        }

        header('Content-Type: '.$this->contentType);
        header('Content-Length: '.$length);
        header('Content-Disposition: inline; filename="'.basename($this->song->path).'"');
        header('Accept-Ranges: bytes');

        if ($partial) {
            dd('partial');
        } else {
            readfile($this->song->path);
        }

        exit;
    }

    protected function getRange()
    {
        if (isset($_SERVER['HTTP_RANGE'])) {
            $range = $_SERVER['HTTP_RANGE'];
        } else if ($apache = apache_request_headers()) {
            $headers = [];

            foreach ($apache as $header => $value) {
                $headers[strtolower($header)] = $value;
            }

            if (isset($headers['range'])) {
                $range = $headers['range'];
            } else {
                $range = false;
            }
        } else {
            $range = false;
        }

        return $range;
    }
}