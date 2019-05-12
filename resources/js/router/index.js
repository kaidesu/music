import Router from 'vue-router'
import Vue from 'vue'

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
            path: '/artists',
            component: () => import('../views/Artists/Index'),
            name: 'artists',
        },

        {
            path: '/albums',
            component: () => import('../views/Albums/Index'),
            name: 'albums',
        },

        {
            path: '/albums/:id',
            component: () => import('../views/Albums/Show'),
            name: 'albums-show',
        },
    ]
})

export default router