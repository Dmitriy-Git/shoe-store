import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/Main.vue'
import Cart from './pages/Cart.vue'
import About from './pages/About.vue'
import Login from './pages/Login.vue'
import Order from './pages/ Order.vue'
import Contact from './pages/Contact.vue' 
import Profile from './pages/Profile.vue'
import Registration from './pages/Registration.vue'
import ProductDetailPopup from './container/ProductDetailPopup.vue'

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
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => { 
    if (from.name === 'Registration' || to.name === 'Registration') next()

    
    if (!localStorage.getItem('token') && to.name !== 'Login') next({ name: 'Login' }) 
    else next()
})

export default router
