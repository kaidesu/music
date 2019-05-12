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
        return AlbumResource::collection(Album::orderBy('name')->with('artist')->withCount('songs')->get());
    }

    public function show(Album $album)
    {
        $album->load('artist', 'songs')->withCount('songs');

        return (new AlbumResource($album));
    }
}