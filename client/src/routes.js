import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/Main.vue'
import Cart from './pages/Cart.vue'
import About from './pages/About.vue'
import Login from './pages/Login.vue'
import Order from './pages/ Order.vue'
import Contact from './pages/Contact.vue' 
import Profile from './pages/Profile.vue'
import ProductDetailPopup from './components/ProductDetailPopup.vue'

const routes = [
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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,

    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => { 
    if (!localStorage.getItem('token') && to.name !== 'Login') next({ name: 'Login' }) 
    else next()
})

export default router
