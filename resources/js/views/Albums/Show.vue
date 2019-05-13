<template>
    <div>
        <div class="flex items-end">
            <img :src="'/' + album.cover" :alt="album.name" class="h-full rounded-lg mr-6" style="width: 220px; max-height: 220px;">

            <div>
                <!-- <span class="text-xs uppercase block tracking-widest font-semibold mb-1">Album</span> -->
                <h1 class="font-bold text-5xl text-white leading-none mb-3">{{ album.name }}</h1>
                <h2 class="text-sm">By <router-link :to="'/artists/' + artist.id" class="hover:underline text-white">{{ artist.name }}</router-link></h2>
                <h3 class="text-sm mb-2">
                    <template v-if="album.year">{{ album.year }}</template>
                    <template v-if="songCount"><span class="mx-1">•</span> {{ songCount }}</template>
                    <template v-if="albumLength"><span class="mx-1">•</span> {{ playtime(albumLength) }}</template>
                    <template v-if="album.genre"><span class="mx-1">•</span> {{ album.genre }}</template>
                </h3>
                <button class="px-10 py-2 mt-3 hover:bg-axiom-600 hover:shadow-lg leading-none bg-axiom-500 text-white text-xs tracking-widest uppercase font-bold rounded-full">Play</button>
            </div>
        </div>

        <app-queue>
            <app-playlist :songs="album.songs"></app-playlist>
        </app-queue>
    </div>
</template>

<script>
    export default {
        name: 'album',

        data() {
            return {
                album: {},
            }
        },

        computed: {
            songs() {
                return this.album.songs || []
            },

            artist() {
                return this.album.artist || {}
            },

            songCount() {
                let count = this.songs.length

                if (count === 1) {
                    return '1 song'
                }

                if (count > 1) {
                    return count + ' songs'
                }
            },

            albumLength() {
                let length = 0

                if (this.songs) {
                    this.songs.forEach(function(song) {
                        length += parseFloat(song.length)
                    })
                }

                return length
            }
        },

        methods: {
            playtime(length) {
                let seconds = Math.floor(length)
                let minutes = Math.floor(seconds / 60)

                seconds = seconds - (minutes * 60)

                return minutes + ':' + (seconds.toString().padStart(2, 0))
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/albums/' + to.params.id),
            ]).then(axios.spread(function(album) {
                next(function(vm) {
                    vm.album = album.data.data
                })
            }))
        },
    }
</script>
