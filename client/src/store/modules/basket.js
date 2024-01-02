

const state = () => ({
    data: null
  })


const getters = {
    cartProducts: (state) => {
        return state.data || []
    },
    cartCount: (state) => {
        if (state.data) return state.data.length

        return 0
    }
}  

export default {
    namespaced: true,
    state,
    getters,
}  
