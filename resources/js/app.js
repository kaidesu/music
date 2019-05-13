import './bootstrap'

import router from './router'
import store from './vuex'
import Vue from 'vue'

const app = new Vue({
    el: '#app',

    store,

    router
});
