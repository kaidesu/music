<template>
    <div class="bg-gray-900 min-h-screen h-screen overflow-hidden font-sans flex flex-col text-gray-400">
        <div class="flex flex-1">
            <app-sidebar></app-sidebar>

            <div class="flex-1 relative overflow-y-scroll">
                <app-search></app-search>

                <div class="p-6 flex justify-center overflow-y-scroll">
                    <div class="w-full">
                        <router-view></router-view>

                        <!-- <h1 class="font-bold text-5xl text-white leading-none mb-20">Recently Added</h1> -->

                        <!-- <div class="mb-5">
                            <span class="text-xs uppercase block tracking-widest font-semibold">Album</span>
                            <h1 class="font-bold text-white text-5xl pt-2 pb-6 leading-none">DICTATOR</h1>
                            <h2 class="text-sm pb-2">By <a href="#" class="hover:underline text-white">Dio - Distraught Overlord</a></h2>
                            <h3 class="text-sm">2008 <span class="mx-1">•</span> 10 songs <span class="mx-1">•</span> 55 min <span class="mx-1">•</span> J-Rock</h3>
                        </div> -->

                        <!-- <table class="w-full mb-10">
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
                                        <i v-if="selected.id == song.id" class="fas fa-compact-disc fa-spin text-axiom-500"></i>
                                        <a v-else href="#" @click.prevent="play(song)"><i class="fas fa-play-circle hover:text-axiom-500"></i></a>
                                    </td>
                                    <td>{{ song.title }}</td>
                                    <td>{{ song.artist.name }}</td>
                                    <td>{{ song.album.name }}</td>
                                    <td class="tracking-wide text-sm">{{ playtime(song) }}</td>
                                </tr>
                            </tbody>
                        </table> -->
                    </div>
                </div>
            </div>
        </div>

        <plyr :src="source"></plyr>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data() {
            return {
                selected: {},
            }
        },

        props: ['songs'],

        computed: {
            source() {
                if (this.selected) {
                    return '/api/stream/' + this.selected.id
                } else {
                    return null;
                }
            },
        },

        methods: {
            play(song) {
                this.selected = song
            },

            playtime(song) {
                let seconds = Math.floor(song.length)
                let minutes = Math.floor(seconds / 60)

                seconds = seconds - (minutes * 60)

                return minutes + ':' + (seconds.toString().padStart(2, 0))
            }
        }
    }
</script>
