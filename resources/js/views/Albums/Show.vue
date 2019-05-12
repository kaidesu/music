<template>
    <div>
        <h1 class="font-bold text-5xl text-white leading-none mb-20">{{ album.name }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'album-show',

        data() {
            return {
                album: {},
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/albums/' + to.params.id),
            ]).then(axios.spread(function(album) {
                next(function(vm) {
                    vm.album = album.data.data
                })
            }))
        },
    }
</script>
