<template>
    <div class="bg-gray-800 w-full flex">
        <div style="width: 200px;" class="block flex flex-col flex-shrink-0 h-20 justify-center text-xs px-3">
            <div v-if="song" class="truncate">
                <router-link tag="button" :to="'/albums/' + song.album.id" class="block focus:outline-none hover:underline text-white">{{ song.title }}</router-link>
                <router-link tag="button" :to="'/artists/' + song.artist.id" class="block focus:outline-none hover:underline">{{ song.artist.name }}</router-link>
            </div>
        </div>

        <div class="w-full flex items-center">
            <audio controls ref="player"></audio>
        </div>
    </div>
</template>

<script>
    import Plyr from 'plyr'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'app-player',

        computed: {
            ...mapGetters('player', [
                'player',
                'source',
                'song',
            ]),
        },

        watch: {
            source(value) {
                this.play()
            },
        },

        mounted() {
            let player = new Plyr(this.$refs.player, this.opts)

            this.initialize(player)
        },
        
        methods: {
            ...mapActions('player', {
                initialize: 'initialize',
                play: 'play',
            }),
        },
    }
</script>