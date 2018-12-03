<template>
    <div class="bg-grey min-h-screen h-screen overflow-hidden font-sans flex flex-col">
        <div class="flex flex-1">

            <!-- Sidebar -->
            <div class="bg-grey-darker pt-2 flex flex-col overflow-hidden" :style="{ width: sidebarWidth }">
                <div class="flex-1 overflow-auto -mr-4">
                    <ul class="list-reset">
                        <li class="px-4 py-1 my-3 border-l-4 border-transparent text-grey-lighter text-xs uppercase tracking-wide">
                            Your Library
                        </li>

                        <li class="py-1 hover:bg-grey-darkest">
                            <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-teal no-underline text-grey-light text-sm font-bold">
                                <fa-icon icon="magic" class="fa-fw mr-2"></fa-icon>

                                Recently Added
                            </a>
                        </li>

                        <li class="py-1 hover:bg-grey-darkest">
                            <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-transparent no-underline text-grey-light text-sm font-bold">
                                <fa-icon icon="users" class="fa-fw mr-2"></fa-icon>
                                
                                Artists
                            </a>
                        </li>

                        <li class="py-1 hover:bg-grey-darkest">
                            <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-transparent no-underline text-grey-light text-sm font-bold">
                                <fa-icon icon="compact-disc" class="fa-fw mr-2"></fa-icon>

                                Albums
                            </a>
                        </li>

                        <li class="py-1 hover:bg-grey-darkest">
                            <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-transparent no-underline text-grey-light text-sm font-bold">
                                <fa-icon icon="music" class="fa-fw mr-2"></fa-icon>
                                
                                Songs
                            </a>
                        </li>

                        <li class="py-1 hover:bg-grey-darkest">
                            <a href="#" class="block px-4 py-1 border-l-4 hover:text-white border-transparent no-underline text-grey-light text-sm font-bold">
                                <fa-icon icon="tags" class="fa-fw mr-2"></fa-icon>
                                
                                Genres
                            </a>
                        </li>
                    </ul>

                    <ul class="list-reset mt-8">
                        <li class="px-4 py-1 my-3 border-l-4 border-transparent text-grey-lighter text-xs uppercase tracking-wide">
                            Playlists
                        </li>
                    </ul>
                </div>

                <div>
                    <img class="block" src="/vendor/music/cover.jpg" alt="Album Cover">
                </div>
            </div>

            <!-- Body -->
            <div class="flex-1 relative overflow-y-auto">
                
                <!-- Searchbar -->
                <div class="flex items-center sticky pin-t py-3 px-6 w-full bg-grey-darker">
                    <div class="flex">
                        <div class="flex items-center mr-6">
                            <a href="#" class="mr-6 text-grey-light no-underline hover:text-white">
                                <fa-icon icon="chevron-left"></fa-icon>
                            </a>

                            <a href="#" class="text-grey-light no-underline hover:text-white">
                                <fa-icon icon="chevron-right"></fa-icon>
                            </a>
                        </div>

                        <div class="bg-white rounded-full px-2 flex items-center overflow-hidden">
                            <fa-icon icon="search" class="mr-2 text-grey-dark"></fa-icon>

                            <input type="text" class="py-1 text-sm text-black outline-none" placeholder="Search">
                        </div>
                    </div>
                </div>

                <div class="p-6 flex justify-center">
                    <div class="w-full max-w-5xl">
                        <div class="row pb-4">
                            <div class="w-full column">
                                <h1 class="text-white">Recently Added</h1>
                            </div>
                        </div>

                        <div class="row">
                            <div class="w-1/6 column">
                                <img class="block" src="/vendor/music/cover.jpg" alt="Album Cover">

                                <div class="flex flex-col font-bold text-sm mt-4">
                                    <span class="text-white mb-2">The Insulated World</span>
                                    <span class="text-grey-lighter">Dir en grey</span>
                                </div>
                            </div>

                            <div class="w-1/6 column">
                                <img class="block" src="/vendor/music/cover-2.jpg" alt="Album Cover">

                                <div class="flex flex-col font-bold text-sm mt-4">
                                    <span class="text-white mb-2">Thornstar</span>
                                    <span class="text-grey-lighter">Lord of the Lost</span>
                                </div>
                            </div>

                            <div class="w-1/6 column">
                                <img class="block" src="/vendor/music/cover-3.jpg" alt="Album Cover">

                                <div class="flex flex-col font-bold text-sm mt-4">
                                    <span class="text-white mb-2">DOGMA</span>
                                    <span class="text-grey-lighter">the GazettE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from './Footer.vue'

    export default {
        name: 'app',

        components: {
            'app-footer': Footer,
        },

        data() {
            return {
                sidebarWidth: '200px',
            }
        },
    }
</script>
