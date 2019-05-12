<?php

namespace App\Http\Controllers\API;

use App\Song;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Resources\SongResource;

class RecentlyAddedController extends Controller
{
    public function index()
    {
        $songs = Song::orderBy('album_id', 'desc')
            ->orderBy('track')
            ->orderBy('created_at', 'desc')
            ->limit(100)
            ->with('album')
            ->get();

        return SongResource::collection($songs);
    }
}