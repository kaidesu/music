import './bootstrap'

import Vue from 'vue'

import App from './Components/App.vue'

new Vue({
    el: '#axiom-music',

    mounted() {
        console.log('Build something amazing.')
    },

    render: h => h(App)
})
