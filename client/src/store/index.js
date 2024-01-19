import { createStore } from 'vuex'
import cart from './modules/cart'
import auth from './modules/auth'

export default createStore({
    modules: {
      cart,
      auth
    }
  })