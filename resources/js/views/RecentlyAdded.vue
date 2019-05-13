<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Recently Added</h1>
        
        <app-playlist
            :songs="songs"
            display-artist
            display-album
        ></app-playlist>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'recently-added',

        data() {
            return {
                songs: [],
            }
        },

        methods: {
            ...mapActions('player', [
                'setSource'
            ]),

            playtime(song) {
                let seconds = Math.floor(song.length)
                let minutes = Math.floor(seconds / 60)

                seconds = seconds - (minutes * 60)

                return minutes + ':' + (seconds.toString().padStart(2, 0))
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/songs/recently-added'),
            ]).then(axios.spread(function(recentlyAdded) {
                next(function(vm) {
                    vm.songs = recentlyAdded.data.data
                })
            }))
        },
    }
</script>
