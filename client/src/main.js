import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue';
import App from './App.vue'
import routes from './routes'
import 'ant-design-vue/dist/reset.css';

const router = createRouter({
    routes,
    history: createWebHistory(),
  })

const app = createApp(App)  

app.use(router)
app.use(Antd)

app.mount('#app')
