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
            <tr v-for="song in songs" :key="song.id" class="border-b border-gray-800 hover:bg-gray-700">
                <td class="p-2 w-10">{{ song.track }}</td>
                <td class="p-2 w-10">
                    <i v-if="isCurrentlyPlaying(song)" class="fas fa-compact-disc fa-spin text-axiom-500"></i>
                    <a v-else href="#" @click.prevent="setSong(song)"><i class="fas fa-play-circle hover:text-axiom-500 text-gray-600"></i></a>
                </td>
                <td class="p-2">{{ song.title }}</td>
                <td class="p-2" v-if="displayArtist">{{ song.artist.name }}</td>
                <td class="p-2" v-if="displayAlbum">{{ song.album.name }}</td>
                <td class="p-2 w-16">{{ playtime(song.length) }}</td>
                <td class="p-2 w-16"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

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

        computed: {
            ...mapGetters('player', [
                'song'
            ]),
        },

        watch: {
            songs(songs) {
                console.log('emitting')
                this.$emit('add-songs', songs)
            },
        },

        methods: {
            ...mapActions('player', [
                'setSong',
                'play'
            ]),

            playtime(length) {
                let seconds = Math.floor(length)
                let minutes = Math.floor(seconds / 60)

                seconds = seconds - (minutes * 60)

                return minutes + ':' + (seconds.toString().padStart(2, 0))
            },

            isCurrentlyPlaying(song) {
                if (! this.song) {
                    return false
                }

                return this.song.id === song.id
            }
        },
    }
</script>
