import Vue from 'vue';

Vue.component('app', require('../components/App.vue').default)
Vue.component('app-sidebar', require('../components/Sidebar.vue').default)
Vue.component('app-search', require('../components/Search.vue').default)
Vue.component('app-player', require('../components/Player.vue').default)
Vue.component('app-playlist', require('../components/Playlist.vue').default)
Vue.component('app-track', require('../components/Track.vue').default)
Vue.component('app-cover', require('../components/Cover.vue').default)