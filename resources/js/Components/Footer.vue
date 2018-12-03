<template>
    <footer class="music-footer">
        <!-- Now Playing -->
        <div class="now-playing">
            <p class="now-playing__song">人間を被る</p>
            <p class="now-playing__artist">Dir en grey</p>
        </div>

        <!-- Audio Controls -->
        <audio id="player" crossorigin="anonymous" controls></audio>
    </footer>
</template>

<script>
    import Plyr from 'plyr'

    export default {
        name: 'app-footer',

        data() {
            return {
                song: '',
            }
        },

        mounted() {
            const player = new Plyr('#player', {
                controlsold: `
                    <div class="music-control-panel">
                        <div class="music-controls">
                            <a href="#" class="music-control-button">
                                <fa-icon icon="random"></fa-icon>
                            </a>

                            <a href="#" class="music-control-button">
                                <fa-icon icon="step-backward"></fa-icon>
                            </a>

                            <a href="#" class="music-control-button music-control-button__play">
                                <fa-icon icon="play"></fa-icon>
                            </a>

                            <a href="#" class="music-control-button">
                                <fa-icon icon="step-forward"></fa-icon>
                            </a>

                            <a href="#" class="music-control-button">
                                <fa-icon icon="redo"></fa-icon>
                            </a>
                        </div>

                        <div class="music-progress">
                            <span class="music-progress__time">3:26</span>

                            <div class="music-progress__container">
                                <div class="music-progress__bar" style="width: 25%;"></div>
                            </div>

                            <span class="music-progress__time">4:40</span>
                        </div>
                    </div>
                `
            })

            player.source = {
                type: 'audio',
                title: 'All Was Calm',
                sources: [
                    {
                        src: '/vendor/music/look, orion! - All Was Calm (2014 Edition).mp3',
                        type: 'audio/mp3',
                    },
                ],
            }
        }
    }
</script>