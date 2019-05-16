<?php

namespace App\Http\Controllers\API;

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
            ->search($query);
        
        return SearchResource::collection($results);
    }
}