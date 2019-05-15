<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('album_id')->unsigned();
            $table->string('title');
            $table->integer('track');
            $table->integer('disc');
            $table->float('length');
            $table->integer('bitrate')->nullable();
            $table->boolean('explicit')->default(false);
            $table->boolean('compilation')->default(false);
            $table->text('path');
            $table->integer('mtime');
            $table->timestamps();
            
            $table->foreign('album_id')->references('id')->on('albums');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songs');
    }
}
