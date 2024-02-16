
<script setup>
    import Menu from './Menu.vue'
    import { LogoutOutlined } from '@ant-design/icons-vue';
    import { computed, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    const store = useStore()
    const router = useRouter()

    const getUser = computed(() => store.getters[`auth/getUser`])

    onMounted(() => {
        if (localStorage.getItem('token')) store.dispatch('auth/check')
    })

    const logout = () => {
        store.commit('auth/logout')
        router.push({ name: 'Login' })
    }
</script>

<template>
    <a-layout style="min-height: 100vh;">
        <a-layout-header class="header">
            <div class="header-menu_container">
                <h1 class="logo">SneakMax</h1>
                <template v-if="getUser">
                    <Menu /> 
                    <a-tooltip>
                    <template #title>
                        <span> Выйти </span>
                    </template>
                    <LogoutOutlined @click="logout" class="logout_container" />
                </a-tooltip>
                </template>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <router-view />
        </a-layout-content>
        <a-layout-footer class="footer">
           <h1 class="logo">SneakMax</h1>
        </a-layout-footer>
    </a-layout>
</template>

<style scoped>
    .header {
        background-color: #484283;
        padding: 0 100px;
    }

    .header-menu_container {
        display: flex;  
    }

    .logo {
        color: #FFFFFF;
    }

    .logout_container {
        font-size: 22px; 
        color: #FFFFFF;
         margin-bottom: 5px;
    }

    .content {
        background-color: #FFFFFF;
        min-height: 55vh;
        position: relative;
    }
    .footer {
        background-color: #444B58;
        padding-left: 100px;
    }
</style>