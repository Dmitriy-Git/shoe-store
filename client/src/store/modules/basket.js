import { getCart, addProductToCart, deleteProductToCart } from '../../api'

const state = () => ({
    productCart: null
  })


const getters = {
    cartProducts: (state) => {
        const result = {}

        state.productCart.productIds.forEach((el) => {
            if(result[el]) result[el] = { count: result[el].count + 1 }
            else result[el] = { count: 1 }
        })

        state.productCart.products.forEach((el) => {
            result[el.id].result = el
        })

        return Object.values(result) || []
    },
    cartCount: (state) => {
        if (state.productCart) {    
            return state.productCart.productIds.length 
        }

        return 0
    },
    totalPrice: (state) => {
        if (state.productCart)
            return state.productCart.products.reduce((acc, el) => acc + el.price, 0)

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
