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
        return AlbumResource::collection(Album::orderBy('name')->get());
    }

    public function show(Album $album)
    {
        return (new AlbumResource($album));
    }
}