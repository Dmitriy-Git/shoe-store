
<script setup>
    import Menu from './Menu.vue'
</script>

<template>
    <a-layout>
        <a-layout-header class="header">
            <div class="header-menu_container">
                <h1 class="logo">SneakMax</h1>
                <Menu /> 
            </div>
            <div class="header-decription">
                <h2 class="header-decription_text">
                    Кроссовки известных брендов <br /> с доставкой по России и СНГ
                </h2>
                <p class="header-decription_text">
                    Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, <br />
                    Converse и многие другие по низким ценам
                </p>
            </div>
            <h2  class="header-decription_back-text">SneakMax</h2>
        </a-layout-header>
        <a-layout-content class="content">
            <router-view />
        </a-layout-content>
        <a-layout-footer class="footer">
        </a-layout-footer>
    </a-layout>
</template>

<style scoped>
    .header {
        position: relative;
        background-color: #484283;
        border-bottom: 1px solid #FFFFFF;
        min-height: 45vh;
        max-height: 45vh;
        padding-inline: 0;
        padding: 0 100px;
    }

    .header-menu_container {
        display: flex; 
        width: 100%; 
        justify-content: center; 
        border-bottom: 1px solid #FFFFFF;
    }

    .header-decription {
        margin-top: 50px;
    }

    .header-decription_text {
        color: #FFFFFF;
        line-height: 30px;
    }

    .header-decription_back-text {
        position: absolute; 
        top: 100px;  
        color: #FFFFFF; 
        left: 50%; 
        transform: translate(-50%, 0); 
        opacity: 0.3; 
        font-size: 200px; 
        line-height: 200px;
    }

    .logo {
        color: #FFFFFF;
    }

    .content {
        background-color: #FFFFFF;
        min-height: 45vh;
    }
    .footer {
        background-color: #444B58;
        min-height: 10vh;
    }
</style>