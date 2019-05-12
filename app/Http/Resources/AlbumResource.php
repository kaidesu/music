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
            'year'   => $this->year,
            'genre'  => $this->genre,
            'cover'  => 'storage/covers/'.$this->cover,
            'artist' => new ArtistResource($this->whenLoaded('artist')),
            'songs'  => SongResource::collection($this->whenLoaded('songs')),
        ];
    }
}
