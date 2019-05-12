<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Recently Added</h1>

        <table class="w-full mb-10">
            <thead class="text-xs uppercase text-left">
                <tr class="border-b border-gray-800 text-gray-600">
                    <th class="p-2 w-10">#</th>
                    <th class="p-2 w-10"></th>
                    <th class="p-2">Title</th>
                    <th class="p-2">Artist</th>
                    <th class="p-2">Album</th>
                    <th class="p-2 w-10"><i class="far fa-clock"></i></th>
                    <th class="p-2 w-10"><i class="fas fa-music"></i></th>
                </tr>
            </thead>
            <tbody class="text-sm tracking-wide">
                <tr v-for="song in songs" :key="song.id" class="border-b border-gray-800 hover:bg-gray-700">
                    <td class="p-2 w-10">{{ song.track }}</td>
                    <td class="p-2 w-10">
                        <!-- <i class="fas fa-compact-disc fa-spin text-axiom-500"></i> -->
                        <a href="#"><i class="fas fa-play-circle hover:text-axiom-500 text-gray-600"></i></a>
                    </td>
                    <td class="p-2">{{ song.title }}</td>
                    <td class="p-2">{{ song.artist.name }}</td>
                    <td class="p-2">{{ song.album.name }}</td>
                    <td class="p-2 w-16">{{ playtime(song) }}</td>
                    <td class="p-2 w-16"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'recently-added',

        data() {
            return {
                songs: [],
            }
        },

        methods: {
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
