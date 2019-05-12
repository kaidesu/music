<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
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
            'id'     => $this->id,
            'name'   => $this->name,
            'cover'  => 'storage/covers/'.$this->cover,
            'artist' => new ArtistResource($this->whenLoaded('artist')),
            'songs'  => SongResource::collection($this->whenLoaded('songs')),
        ];
    }
}
