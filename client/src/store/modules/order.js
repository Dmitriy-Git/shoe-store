import { 
    getOrder,
    createOrder as fetchCreateOrder,  
    deleteOrder as fetchDeleteOrder 
} from '../../api'

const state = () => ({
    orders: null,
    loading: false,
    error: null,
  })


const getters = {
    getOrders: (state) => {
        return state.orders?.length ? state.orders : null
    },
    getOrderTotal: (state) => {
        return state.orders?.length || 0
    },
    getLoading: (state) => {
        return state.loading
    },
    getError: (state) => {
        return state.error
    }
} 

const actions = {
    fetchOrders ({ commit }, userId) {
        commit('setLoadingOrder', true)

        return new Promise((resolve, reject) => {
            return getOrder(userId)
            .then(({ data }) => { 
                commit('setOrders', data)
                resolve(data) 
            })
            .catch(e => {
                commit('setErrorOrder', e)
                reject(e)
            })
            .finally(() => commit('setLoadingOrder', false))
        })
    },
    deleteOrder ({ commit }, userId) {
        commit('setLoadingOrder', true)

        return new Promise((resolve, reject) => {
            return fetchDeleteOrder(userId)
            .then(() => resolve('success'))
            .catch(e => {
                commit('setErrorOrder', e)
                reject(e)
            })
            .finally(() => commit('setLoadingOrder', false))
        })
    },
    createOrder ({ commit }, params) {
        commit('setLoadingOrder', true)

        return new Promise((resolve, reject) => {
            return fetchCreateOrder(params)
            .then(() => resolve('success'))
            .catch(e => {
                commit('setErrorOrder', e)
                reject(e)
            })
            .finally(() => commit('setLoadingOrder', false))
        })
    }
}

const mutations = {
    setOrders (state, data) {
      state.orders = Object.entries(data)
    },
    setLoadingOrder (state, loading) {
        state.loading = loading
    },
    setErrorOrder (state, error) {
        state.error = error
    },
  }

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations,
}  
