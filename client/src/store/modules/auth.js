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
    getError: (state) => {
        return state.error
    },
} 

const actions = {
    login ({ commit }, params) {
        commit('setLoading', true)

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
            .finally(() => commit('setLoading', false))
        })
    },
    registration ({ commit }, params) {
        commit('setLoading', true)

        registrationApi(params)
            .then(({ data }) => { 
                localStorage.setItem('token', data.token);
                commit('setUser', data.user) 
            })
            .catch(e => commit('setError', e))
            .finally(() => commit('setLoading', false))

    },
    check ({ commit }) {
        commit('setLoading', true)

        checkAuth()
            .then(({ data }) => {
                commit('setUser', data.user) 
            })
            .catch(e => commit('setError', e.response.data.message))
            .finally(() => commit('setLoading', false))
    },
    update ({ commit }, params) {
        commit('setLoading', true)

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
                .finally(() => commit('setLoading', false))
        })
    }
}

const mutations = {
    setUser (state, user) {
      state.user = user
    },
    setLoading (state, loading) {
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