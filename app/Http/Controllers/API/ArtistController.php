<?php

namespace App\Http\Controllers\API;

use App\Artist;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Resources\ArtistResource;

class ArtistController extends Controller
{
    public function index()
    {
        return ArtistResource::collection(Artist::with('albums')->orderBy('name')->get());
    }

    public function show(Artist $artist)
    {
        $artist->load('albums', 'albums.songs');

        return (new ArtistResource($artist));
    }
}