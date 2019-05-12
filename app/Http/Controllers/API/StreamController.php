<?php

namespace App\Http\Controllers\API;

use App\Song;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Resources\SongResource;
use Facades\App\Factories\StreamerFactory;

class StreamController extends Controller
{
    public function show(Request $request, Song $song)
    {
        return StreamerFactory::build($song)
            ->stream();
    }
}