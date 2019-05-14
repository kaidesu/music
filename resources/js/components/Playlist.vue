<template>
    <table class="w-full mb-10">
        <thead class="text-xs uppercase text-left">
            <tr class="border-b border-gray-800 text-gray-600">
                <th class="p-2 w-10">#</th>
                <th class="p-2 w-10"></th>
                <th class="p-2">Title</th>
                <th class="p-2" v-if="displayArtist">Artist</th>
                <th class="p-2" v-if="displayAlbum">Album</th>
                <th class="p-2 w-10"><i class="far fa-clock"></i></th>
                <th class="p-2 w-10"><i class="fas fa-music"></i></th>
            </tr>
        </thead>
        <tbody class="text-sm tracking-wide">
            <app-track v-for="song in songs" :key="song.id" :song="song" :displayArtist="displayArtist" :displayAlbum="displayAlbum"></app-track>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'playlist',

        props: {
            songs: {
                required: true,
            },
            displayArtist: {
                type: Boolean,
                required: false,
                default: false,
            },
            displayAlbum: {
                type: Boolean,
                required: false,
                default: false
            },
        },
    }
</script>
