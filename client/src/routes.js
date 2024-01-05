import Main from './pages/Main.vue'
import CartPage from './pages/CartPage.vue'
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
    }
]

