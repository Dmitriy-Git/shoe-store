import Main from './pages/Main.vue'
import Cart from './pages/Cart.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue' 
import ProductDetailPopup from './components/ProductDetailPopup.vue'

export default [
    {   
        path: '/', 
        component: Main, 
        children: [
            {
                path: '/product/:id/popup', 
                component: ProductDetailPopup
            }
        ] 
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/contact',
        component: Contact,
    }
]

