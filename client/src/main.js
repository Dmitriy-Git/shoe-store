import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue';
import App from './App.vue'
import routes from './routes'
import store  from './store'
import 'ant-design-vue/dist/reset.css';
import { createYmaps } from 'vue-yandex-maps';

const router = createRouter({
    routes,
    history: createWebHistory(),
  })

const app = createApp(App) 

app.use(createYmaps({
  apikey: '3d686c76-f171-4f4c-a99e-0bd14c025262',
}));

app.use(router)
app.use(store)
app.use(Antd)

app.mount('#app')
