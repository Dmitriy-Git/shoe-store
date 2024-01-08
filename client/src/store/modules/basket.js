import { getCart, addProductToCart, deleteProductToCart } from '../../api'

const state = () => ({
    productCart: null
  })


const getters = {
    cartProducts: (state) => {
        return state.productCart
    },
    cartCount: (state) => {
        if (state.productCart) {    
            return state.productCart.reduce((acc, el) => acc + el.count, 0)
        }

        return 0
    },
    totalPrice: (state) => {
        if (state.productCart)
            return state.productCart.reduce((acc, el) => acc + el.product.price * el.sizes.length, 0)

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
