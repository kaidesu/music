<?php

namespace AxiomLabs\Music\Models;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    /**
     * An album belongs to an artist.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    /**
     * An album has many songs.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}