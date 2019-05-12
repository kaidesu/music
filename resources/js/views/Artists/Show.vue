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

            <table class="w-full mt-6 mb-10">
                <thead class="text-xs uppercase text-left">
                    <tr class="border-b border-gray-800 text-gray-600">
                        <th class="p-2 w-10">#</th>
                        <th class="p-2 w-10"></th>
                        <th class="p-2">Title</th>
                        <th class="p-2 w-16"><i class="far fa-clock"></i></th>
                        <th class="p-2 w-16"><i class="fas fa-music"></i></th>
                    </tr>
                </thead>

                <tbody class="text-sm tracking-wide">
                    <tr v-for="song in album.songs" :key="song.id" class="border-b border-gray-800 hover:bg-gray-700">
                        <td class="p-2 w-10">{{ song.track }}</td>
                        <td class="p-2 w-10">
                            <!-- <i class="fas fa-compact-disc fa-spin text-axiom-500"></i> -->
                            <a href="#"><i class="fas fa-play-circle hover:text-axiom-500 text-gray-600"></i></a>
                        </td>
                        <td class="p-2">{{ song.title }}</td>
                        <td class="p-2 w-16">{{ playtime(song.length) }}</td>
                        <td class="p-2 w-16"></td>
                    </tr>
                </tbody>
            </table>
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
                axios.get('/api/artists/' + to.params.id),
            ]).then(axios.spread(function(artist) {
                next(function(vm) {
                    vm.artist = artist.data.data
                })
            }))
        },
    }
</script>
