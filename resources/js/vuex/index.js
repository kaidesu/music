import Vuex from 'vuex'
import Vue from 'vue'

// Vuex Modules
import player from './player.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        player
    }
})

export default store