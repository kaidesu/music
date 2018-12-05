<?php

namespace AxiomLabs\Music;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use AxiomLabs\Music\Console\Commands\ScanForMusic;

class AxiomMusicServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the provided services.
     * 
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();
        $this->registerMigrations();
        $this->registerPublishing();
        $this->registerCommands();

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'music');
    }

    /**
     * Register the provided services.
     * 
     * @return void
     */
    public function register()
    {
        // 
    }

    /**
     * Register the provided routes.
     * 
     * @return void
     */
    private function registerRoutes()
    {
        Route::group([
            'namespace' => 'AxiomLabs\Music\Http\Controllers',
            'prefix'    => 'music'
        ], function() {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        });

        Route::group([
            'namespace' => 'AxiomLabs\Music\Http\Controllers\API',
            'prefix'    => 'api/music'
        ], function() {
            $this->loadRoutesFrom(__DIR__.'/../routes/api.php');
        });
    }

    /**
     * Register the provided migrations.
     * 
     * @return void
     */
    private function registerMigrations()
    {
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        }
    }

    /**
     * Register the provided publishable resources.
     * 
     * @return void
     */
    private function registerPublishing()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../public' => public_path('vendor/music'),
            ], 'music-assets');
        }
    }

    /**
     * Register the provided commands.
     * 
     * @return void
     */
    private function registerCommands()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                ScanForMusic::class,
            ]);
        }
    }
}