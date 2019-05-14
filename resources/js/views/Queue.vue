<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Queue</h1>

        <app-playlist
            :songs="queue"
            display-artist
            display-album
        ></app-playlist>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('player', [
                'queue'
            ]),
        }
    }
</script>
