import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(far, fas)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.component('fa-icon', FontAwesomeIcon)