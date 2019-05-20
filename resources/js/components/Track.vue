<template>
    <tr class="text-light-gray-500 border-b border-red-500" ref="track">
        <td class="pl-4 pb-10 w-10">
            <div class="w-full bg-red-500">
                {{ song.track }}
            </div>
        </td>
        <td class="p-4 w-10">
            <i v-if="isCurrentlyPlaying()" class="fas fa-compact-disc fa-spin text-axiom-500"></i>
            <button v-else @click.prevent="setSong(song)"><i class="fas fa-play-circle hover:text-axiom-500 text-gray-600 focus:outline-none"></i></button>
        </td>
        <td class="p-4">{{ song.title }}</td>
        <td class="p-4" v-if="displayArtist"><router-link tag="button" :to="'/artists/' + song.artist.id" class="focus:outline-none hover:underline">{{ song.artist.name }}</router-link></td>
        <td class="p-4" v-if="displayAlbum"><router-link tag="button" :to="'/albums/' + song.album.id" class="focus:outline-none hover:underline">{{ song.album.name }}</router-link></td>
        <td class="p-4 w-16">{{ playtime(song.length) }}</td>
        <td class="p-4 w-16"></td>
    </tr>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    
    export default {
        name: 'app-track',
        
        props: {
            song: {
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
            ...mapGetters('player', {
                currentSong: 'song'
            }),
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

            isCurrentlyPlaying() {
                if (! this.currentSong) {
                    return false
                }

                return this.currentSong.id === this.song.id
            }
        },
    }
</script>
