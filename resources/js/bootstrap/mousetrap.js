import store from '../vuex'

const Mousetrap = require('mousetrap')

// Add shortcut to search input when pressing the "/" key
Mousetrap.bind('/', function(e) {
    e.preventDefault()
    document.getElementById('search').focus()
})

Mousetrap.bind('space', function(e) {
    e.preventDefault()
    store.dispatch('player/togglePlay')
})