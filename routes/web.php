<?php

Route::get('/{view?}', 'HomeController@index')->where('view', '(.*)')->name('music');