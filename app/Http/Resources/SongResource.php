<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SongResource extends JsonResource
{
    /**
     * Transform the resource into an array.
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
            'artist'     => new ArtistResource($this->album->artist),
            'album'      => new AlbumResource($this->album),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
