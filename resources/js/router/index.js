import Router from 'vue-router'
import Vue from 'vue'
import store from '../vuex'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: () => import('../views/Browse'),
            name: 'browse',
        },

        {
            path: '/recently-added',
            component: () => import('../views/RecentlyAdded'),
            name: 'recently-added',
        },

        {
            path: '/queue',
            component: () => import('../views/Queue'),
            name: 'queue',
        },

        {
            path: '/artists',
            component: () => import('../views/Artists/Index'),
            name: 'artists',
        },

        {
            path: '/artists/:id',
            component: () => import('../views/Artists/Show'),
            name: 'artist',
        },

        {
            path: '/albums',
            component: () => import('../views/Albums/Index'),
            name: 'albums',
        },

        {
            path: '/albums/:id',
            component: () => import('../views/Albums/Show'),
            name: 'album',
        },
    ]
})

// We want to reset our temp queue before each page
// This way when we click play, we can properly
// set our queue based on current tracks.
router.beforeEach((to, from, next) => {
    store.dispatch('player/resetTempQueue')

    next()
})

export default router