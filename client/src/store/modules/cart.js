import { getCart, addProductToCart, deleteProductToCart, deleteProductsToCart } from '../../api'

const state = () => ({
    productCart: null
  })


const getters = {
    cartProducts: (state) => {
        return state.productCart?.length ? state.productCart : null
    },
    cartSizes: (state) => {
        return state.productCart?.length ? state.productCart.reduce((acc, i) => [...acc, i.size], []) : []
    },
    cartIds: (state) => {
        return state.productCart?.map((product) => product.id)
    },
    productIds: (state) => {
        return state.productCart?.map((product) => product.productId)
    },
    cartCount: (state) => {
        return state.productCart?.length || 0
    },
    totalPrice: (state) => {
        if (state.productCart)
            return state.productCart.reduce((acc, el) => acc + el.price, 0)

        return 0    
    }
} 

const actions = {
    getAllProducts ({ commit }, userId) {
        getCart(userId)
            .then(({ data }) => { commit('setCart', data) })
            .catch(e => console.log(e))
    },
    addProduct ({ commit }, params) {
        addProductToCart(params)
            .then(({ data }) => { commit('setCart', data) })
            .catch(e => console.log(e))

    },
    deleteProduct ({ commit }, params) {
        deleteProductToCart(params)
            .then(({ data }) => { commit('setCart', data) })
            .catch(e => console.log(e))
    },
    deleteProducts({ commit }, params) {
        deleteProductsToCart(params)
            .then(({ data }) => { commit('setCart', data) })
            .catch(e => console.log(e))
    }
}

const mutations = {
    setCart (state, products) {
      state.productCart = products
    },
  }

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations,
}  
