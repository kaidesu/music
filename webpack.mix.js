let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

mix.setPublicPath('public')
    .js('resources/js/app.js', 'public')
    .sass('resources/sass/app.scss', 'public')
    .version()
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.js')
        ]
    })
