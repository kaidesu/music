<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    /**
     * An artist has many albums.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function albums()
    {
        return $this->hasMany(Album::class)->orderBy('year', 'desc');
    }

    /**
     * An artist has many songs through albums.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function songs()
    {
        return $this->hasManyThrough(Song::class, Album::class);
    }
}
