import Main from './pages/Main.vue'
import CartPage from './pages/CartPage.vue'
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
        path: '/basket',
        component: CartPage,
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

