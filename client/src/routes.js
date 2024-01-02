import Main from './pages/Main.vue'
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
]

