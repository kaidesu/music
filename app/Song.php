<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['album_id', 'title', 'track', 'disc', 'length', 'path', 'mtime'];

    /**
     * A song belongs to an album.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function album()
    {
        return $this->belongsTo(Album::class);
    }
}
