<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">{{ artist.name }}</h1>

        <h2 class="font-bold text-lg text-white leading-none mb-20">Most Listened</h2>
        
        <h3 class="font-bold text-lg text-white leading-none mb-6 border-b border-gray-800 py-3">Library</h3>
        <div class="mb-10" v-for="album in artist.albums" :key="album.id">
            <div class="flex items-end">
                <img :src="'/' + album.cover" :alt="album.name" class="h-full rounded-lg mr-6" style="width: 175px; max-height: 175px;">

                <div>
                    <span class="text-xs uppercase block tracking-widest font-semibold mb-1">{{ album.year }}</span>
                    <h1 class="font-bold text-3xl text-white leading-none mb-3">{{ album.name }}</h1>
                    <!-- <h3 class="text-sm">2008 <span class="mx-1">•</span> 10 songs <span class="mx-1">•</span> 55 min <span class="mx-1">•</span> J-Rock</h3> -->
                </div>
            </div>

            <app-playlist :songs="album.songs"></app-playlist>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'artist',

        data() {
            return {
                artist: {},
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/artists/' + to.params.id),
            ]).then(axios.spread(function(artist) {
                next(function(vm) {
                    vm.artist = artist.data.data
                })
            }))
        },
    }
</script>
