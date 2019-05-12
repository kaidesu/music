<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Albums</h1>

        <div class="flex flex-wrap -mx-3">
            <div class="text-sm px-3 mb-8 w-1/2 md:w-1/3 lg:w-1/6" v-for="album in albums" :key="album.id">
                <router-link :to="'/albums/' + album.id" class="block h-auto w-full rounded mb-2 hover:shadow-lg border-2 border-transparent hover:border-gray-500">
                    <img :src="'/' + album.cover" :alt="album.name" class="h-auto w-full rounded">
                </router-link>
                
                <p><router-link :to="'/albums/' + album.id" class="text-gray-500 hover:underline font-bold leading-loose">{{ album.name }}</router-link></p>
                <p><a href="#" class="text-gray-600 hover:underline leading-loose">{{ album.artist.name }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'albums',

        data() {
            return {
                albums: [],
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/albums'),
            ]).then(axios.spread(function(albums) {
                next(function(vm) {
                    vm.albums = albums.data.data
                })
            }))
        },
    }
</script>
