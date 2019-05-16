<template>
    <div class="flex items-center sticky pin-t py-3 px-6 w-full bg-gray-900 fixed top-0 shadow-md">
        <div class="flex">
            <div class="flex items-center mr-6">
                <button @click.prevent="$router.go(-1)" class="mr-6 text-gray-200 no-underline hover:text-white focus:outline-none">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <button @click.prevent="$router.go(1)" class="mr-6 text-gray-200 no-underline hover:text-white focus:outline-none">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>

            <div class="bg-white rounded-full px-2 flex items-center overflow-hidden">
                <i class="fas fa-search mr-2 text-gray-800"></i>

                <input type="text" id="search" class="py-1 text-sm text-black outline-none" placeholder="Search" v-model="query">
            </div>

            <div class="absolute mt-20 ml-20 z-50 bg-white" v-if="results.length > 0 && query">
                <ul>
                    <li v-for="result in results.slice(0, 10)" :key="result.id" class="text-black">
                        {{ result.resource.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: null,
                results: [],
            }
        },

        watch: {
            query(after, before) {
                this.search()
            },
        },

        methods: {
            search() {
                axios.get('/api/search/' + this.query)
                    .then(response => this.results = response.data.data)
                    .catch(error => {})
            }
        }
    }
</script>
