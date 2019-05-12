<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">{{ artist.name }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'artist',

        data() {
            return {
                artist: {},
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/artists/' + to.params.id),
            ]).then(axios.spread(function(artist) {
                next(function(vm) {
                    vm.artist = artist.data.data
                })
            }))
        },
    }
</script>
