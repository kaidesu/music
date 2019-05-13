<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <div class="sidebar__container">
            <ul class="sidebar__nav">
                <li class="sidebar__item">
                    <router-link exact to="/" class="sidebar__link mt-8">
                        Browse
                    </router-link>
                </li>
            </ul>

            <ul class="sidebar__nav mt-8">
                <li class="sidebar__label">
                    Your Library
                </li>

                <li class="sidebar__item">
                    <router-link to="/recently-added" class="sidebar__link">
                        Recently Added
                    </router-link>
                </li>

                <li class="sidebar__item">
                    <router-link to="/artists" class="sidebar__link">
                        Artists
                    </router-link>
                </li>

                <li class="sidebar__item">
                    <router-link to="/albums" class="sidebar__link">
                        Albums
                    </router-link>
                </li>

                <li class="sidebar__item">
                    <a href="#" class="sidebar__link">
                        Songs
                    </a>
                </li>
            </ul>

            <ul class="mt-8">
                <li class="sidebar__label">
                    Playlists
                </li>
            </ul>
        </div>

        <app-cover></app-cover>
    </div>
</template>

<script>
    export default {
        name: 'app-sidebar',

        data() {
            return {
                sidebarWidth: '200px',
            }
        }
    }
</script>