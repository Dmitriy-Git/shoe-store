import Main from './pages/Main.vue'
import ProductDetail from './pages/ProductDetail.vue'

export default [
    {   
        path: '/', 
        component: Main, 
        children: [
            {
                path: '/product/:id/popup', 
                component: ProductDetail
            }
        ] 
    },
]

