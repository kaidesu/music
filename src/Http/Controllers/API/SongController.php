<?php

namespace AxiomLabs\Music\Http\Controllers\API;

use Illuminate\Http\Request;
use AxiomLabs\Music\Models\Song;
use Illuminate\Routing\Controller;
use AxiomLabs\Music\Http\Resources\Song as SongResource;
use AxiomLabs\Music\Http\Resources\SongCollection;

class SongController extends Controller
{
    public function index()
    {
        return new SongCollection(Song::paginate());
    }

    public function store(Request $request)
    {
        $song = new Song;

        $song->album_id = 1;
        $song->title    = $request->title;
        $song->track    = $request->track;
        $song->disc     = $request->disc;
        $song->length   = 100;
        $song->path     = 'path';
        $song->mtime    = 100;

        $song->save();

        return new SongResource($song);
    }
}