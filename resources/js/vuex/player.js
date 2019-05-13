export default {
    namespaced: true,

    state: {
        player: {},
        source: null,
        song: null,
    },

    getters: {
        player: state => {
            return state.player
        },

        source: state => {
            return state.source
        },

        song: state => {
            return state.song
        },
    },

    mutations: {
        INITIALIZE(state, payload) {
            state.player = payload.player
        },

        PLAY(state) {
            console.log('PLAY')
            state.player.play()
        },

        SET_SONG(state, payload) {
            state.song = payload.song
            state.source = '/api/stream/' + payload.song.id

            state.player.source = {
                type: 'audio',
                title: payload.song.title,
                sources: [
                    {
                        src: state.source,
                        type: 'audio/mp3',
                    },
                ],
            }
        }
    },

    actions: {
        initialize({ commit }, player) {
            commit('INITIALIZE', {
                player: player
            })
        },

        play({ commit }) {
            commit('PLAY')
        },

        setSong({ commit }, song) {
            commit('SET_SONG', {
                song: song
            })
        }
    },
}