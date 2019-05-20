<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">Artists</h1>

        <div class="flex flex-wrap -mx-3">
            <div class="text-sm px-3 mb-8 w-full md:w-1/3" v-for="artist in artists" :key="artist.id">
                <router-link tag="button" :to="'/artists/' + artist.id" class="block h-auto w-full rounded mb-2 hover:shadow-lg border-2 border-transparent hover:border-gray-500 focus:outline-none">
                    <div class="rounded w-full bg-gray-600 block" style="height: 220px;">                        
                        <!-- <img v-for="album in artist.albums" :key="album.id" :src="'/' + album.cover" :alt="album.name" class="h-auto w-full rounded" style="max-width: 55px;"> -->
                    </div>
                </router-link>
                
                <p><router-link tag="button" :to="'/artists/' + artist.id" class="text-light-gray-500 hover:underline font-bold leading-loose focus:outline-none">{{ artist.name }}</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    
    export default {
        name: 'artists',

        data() {
            return {
                artists: [],
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/artists'),
            ]).then(axios.spread(function(artists) {
                next(function(vm) {
                    vm.artists = artists.data.data
                })
            }))
        },
    }
</script>