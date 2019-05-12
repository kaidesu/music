<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Recently Added</h1>

        <table class="w-full mb-10">
            <thead class="text-xs uppercase text-left">
                <tr class="border-b border-gray-700 text-gray-600">
                    <th class="p-1"></th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th><i class="far fa-clock"></i></th>
                </tr>
            </thead>
            <tbody class="text-sm">
                <tr v-for="song in songs" :key="song.id" class="border-b border-gray-700 hover:bg-gray-700">
                    <td class="px-3 w-20 text-xl text-gray-600">
                        <!-- <i v-if="selected.id == song.id" class="fas fa-compact-disc fa-spin text-axiom-500"></i>
                        <a v-else href="#" @click.prevent="play(song)"><i class="fas fa-play-circle hover:text-axiom-500"></i></a> -->
                    </td>
                    <td>{{ song.title }}</td>
                    <td>{{ song.artist.name }}</td>
                    <td>{{ song.album.name }}</td>
                    <td class="tracking-wide text-sm">{{ playtime(song) }}</td>
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
