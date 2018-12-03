<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Axiom Music</title>

        <link href="{{ asset(mix('app.css', 'vendor/music')) }}" rel="stylesheet" type="text/css">
    </head>
    <body class="bg-grey-darker">
        <div id="axiom-music"></div>

        <script src="{{ asset(mix('app.js', 'vendor/music')) }}"></script>
    </body>
</html>
