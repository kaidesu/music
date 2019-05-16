<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/stream/{song}', 'API\StreamController@show');

Route::get('/songs', 'API\SongController@index');
Route::get('/songs/recently-added', 'API\RecentlyAddedController@index');

Route::get('/artists', 'API\ArtistController@index');
Route::get('/artists/{artist}', 'API\ArtistController@show');

Route::get('/albums', 'API\AlbumController@index');
Route::get('/albums/{album}', 'API\AlbumController@show');

Route::get('/search/{query?}', 'API\SearchController@index');