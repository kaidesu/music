<?php

namespace AxiomLabs\Music\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Song extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'title'      => $this->title,
            'track'      => $this->track,
            'disc'       => $this->disc,
            'length'     => $this->length,
            'path'       => $this->path,
            'mtime'      => $this->mtime,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
