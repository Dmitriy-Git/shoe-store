import { login as loginApi, registration as registrationApi, checkAuth, updateUser  } from '../../api'

const state = () => ({
    user: null,
    loading: false,
    error: null,
})


const getters = {
    getUser: (state) => {
        return state.user
    },
    getUserId: (state) => {
        return state.user?.id || null
    },
    getLoading: () => {
        return state.loading
    },
    getError: (state) => {
        return state.error
    },
} 

const actions = {
    login ({ commit }, params) {
        commit('setLoadingAuth', true)

        return new Promise((resolve, reject) => {
            loginApi(params)
            .then(({ data }) => { 
                localStorage.setItem('token', data.token);
                commit('setUser', data.user)
                resolve(data.user)
             })
            .catch(e => {
                commit('setError', e.response.data.error)
                reject(e)
            })
            .finally(() => commit('setLoadingAuth', false))
        })
    },
    registration ({ commit }, params) {
        commit('setLoadingAuth', true)

        registrationApi(params)
            .then(({ data }) => { 
                localStorage.setItem('token', data.token);
                commit('setUser', data.user) 
            })
            .catch(e => commit('setError', e))
            .finally(() => commit('setLoadingAuth', false))

    },
    check ({ commit }) {
        commit('setLoadingAuth', true)

        checkAuth()
            .then(({ data }) => {
                commit('setUser', data.user) 
            })
            .catch(e => commit('setError', e.response.data.message))
            .finally(() => commit('setLoadingAuth', false))
    },
    update ({ commit }, params) {
        commit('setLoadingAuth', true)

        return new Promise((resolve, reject) => {
            updateUser(params)
                .then(({ data }) => { 
                    localStorage.setItem('token', data.token);
                    commit('setUser', data.user)
                    resolve(data.user)
                })
                .catch(e => {
                    commit('setError', e.response.data.error)
                    reject(e)
                })
                .finally(() => commit('setLoadingAuth', false))
        })
    }
}

const mutations = {
    setUser (state, user) {
      state.user = user
    },
    setLoadingAuth (state, loading) {
        state.loading = loading
    },
    setError (state, error) {
        state.error = error
    },
    logout (state) {
        localStorage.removeItem('token');
        state.user = null
    }
  }

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations,
}  