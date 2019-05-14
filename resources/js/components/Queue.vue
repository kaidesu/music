<template>
    <div
        class="playlist--queue"
        v-on:add-songs="addSongs"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'queue',

        data() {
            return {
                songs: [],
            }
        },

        methods: {
            addSongs() {
                console.log('adding songs')
            }
        },
    }
</script>
