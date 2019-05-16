<?php

namespace App;

use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use Illuminate\Database\Eloquent\Model;

class Song extends Model implements Searchable
{
    /**
     * Format the searchable result for the model.
     * 
     */
    public function getSearchResult(): SearchResult
    {
        return new SearchResult($this, $this->title, "/albums/{$this->album->id}");
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['album_id', 'title', 'track', 'disc', 'length', 'path', 'mtime', 'explicit', 'compilation'];

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
