<?php

namespace App;

use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use Illuminate\Database\Eloquent\Model;

class Album extends Model implements Searchable
{
    /**
     * Format the searchable result for the model.
     * 
     */
    public function getSearchResult(): SearchResult
    {
        return new SearchResult($this, $this->name, "/albums/{$this->id}");
    }

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
        return $this->hasMany(Song::class)->orderBy('disc')->orderBy('track');
    }
}
