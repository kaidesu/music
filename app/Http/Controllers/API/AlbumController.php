<?php

namespace App\Http\Controllers\API;

use App\Album;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Resources\AlbumResource;

class AlbumController extends Controller
{
    public function index()
    {
        return AlbumResource::collection(Album::orderBy('name')->with('artist')->get());
    }

    public function show(Album $album)
    {
        $album->load('artist', 'songs');

        return (new AlbumResource($album));
    }
}