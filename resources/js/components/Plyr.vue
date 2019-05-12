<template>
    <div>
        <audio controls></audio>
    </div>
</template>

<script>
    import Plyr from 'plyr'

    export default {
        name: 'plyr',

        data() {
            return {
                player: {},
            }
        },
        
        props: {
            src: {
                required: false,
                default: null,
            },

            options: {
                type: Object,
                required: false,
                default() {
                    return {
                        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                    }
                },
            },

            emit: {
                type: Array,
                required: false,
                default() {
                    return []
                }
            },
        },

        computed: {
            opts() {
                const options = this.options

                if (! this.options.hasOwnProperty('hideYouTubeDOMError')) {
                    options.hideYouTubeDOMError = true
                }

                return options
            },
        },

        watch: {
            src(value) {
                console.log('source changed')

                if (value !== null) {
                    console.log('updating...')

                    this.player.source = {
                        type: 'audio',
                        title: 'Song',
                        sources: [
                            {
                                src: value,
                                type: 'audio/mp3',
                            },
                        ],
                    }

                    this.play()
                }
            }
        },

        mounted() {
            this.player = new Plyr(this.$el.firstChild, this.opts)
            this.$emit('player', this.player)

            this.emit.forEach(element => {
                this.player.on(element, this.emitPlayerEvent)
            })
        },
        
        methods: {
            emitPlayerEvent(event) {
                this.$emit(event.type, event)
            },

            play() {
                this.player.play()
            },
        },

        beforeDestroy() {
            try {
                this.player.destroy()
            } catch (e) {
                // 
            }
        },

    }
</script>

<style src="../../../node_modules/plyr/dist/plyr.css"></style>