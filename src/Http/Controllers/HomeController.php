<?php

namespace AxiomLabs\Music\Http\Controllers;

use Illuminate\Routing\Controller;

class HomeController extends Controller
{
    /**
     * Display the Music view.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('music::layout');
    }
}