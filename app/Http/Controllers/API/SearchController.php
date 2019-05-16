<?php

namespace App\Http\Controllers\API;

use App\Song;
use App\Album;
use App\Artist;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;
use Illuminate\Routing\Controller;
use App\Http\Resources\SearchResource;

class SearchController extends Controller
{
    public function index($query = '')
    {
        $results = (new Search)
            ->registerModel(Artist::class, ['name'])
            ->registerModel(Album::class, ['name'])
            ->registerModel(Song::class, ['title'])
            ->search($query);
        
        return SearchResource::collection($results);
    }
}