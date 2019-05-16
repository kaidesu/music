<?php

namespace App;

use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model implements Searchable
{
    /**
     * Format the searchable result for the model.
     * 
     */
    public function getSearchResult(): SearchResult
    {
        return new SearchResult($this, $this->name, "/artists/{$this->id}");
    }

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
