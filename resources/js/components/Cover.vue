<template>
    <div>
        <div v-if="! song" class="w-full block bg-dark flex items-center justify-center text-5xl" style="height: 200px">
            <i class="fas fa-compact-disc fa-3x text-gray-800 fa-spin"></i>
        </div>
        
        <img v-else :src="'/' + song.album.cover" :alt="song.album.name" class="h-full mr-6" style="width: 220px; max-height: 220px;">
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'app-cover',

        computed: {
            ...mapGetters('player', [
                'song'
            ]),
        },
    }
</script>
