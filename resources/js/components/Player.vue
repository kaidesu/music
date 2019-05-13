<template>
    <div>
        <audio controls></audio>
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
            ]),
        },

        watch: {
            source(value) {
                this.play()
            },
        },

        mounted() {
            let player = new Plyr(this.$el.firstChild, this.opts)

            this.initialize(player)
        },
        
        methods: {
            ...mapActions('player', {
                initialize: 'initialize',
                play: 'play',
            }),
        },

        // beforeDestroy() {
        //     try {
        //         this.player.destroy()
        //     } catch (e) {
        //         // 
        //     }
        // },

    }
</script>

<style src="../../../node_modules/plyr/dist/plyr.css"></style>