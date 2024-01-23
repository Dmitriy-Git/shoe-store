import { createStore } from 'vuex'
import cart from './modules/cart'
import auth from './modules/auth'
import order from './modules/order'

export default createStore({
    modules: {
      cart,
      auth,
      order
    }
  })