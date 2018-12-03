<?php

Route::get('/songs', 'SongController@index');
Route::post('/songs', 'SongController@store');
Route::patch('/songs/{id}', 'SongController@update');
Route::delete('/songs/{id}', 'SongController@destroy');