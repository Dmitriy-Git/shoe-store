<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { message } from 'ant-design-vue';
    import { UserOutlined } from '@ant-design/icons-vue';

    const store = useStore()

    const user = computed(() => store.getters[`auth/getUser`])

    const onFinish = (values) => {
        store.dispatch('auth/update', { ...values, id: user.value.id })
            .then(() => { message.success('Изменение сохранены') })
    };
</script>

<template>
    <div class="wrapper">
        <h2>Редактировать профиль</h2>
        <div class="form_container">
            <a-avatar :size="220">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <a-form :model="user" name="edit-profile" @finish="onFinish">
                <a-form-item name="username" v-if="user">
                    <a-input v-model:value="user.username" />
                </a-form-item>

                <a-form-item name="password" v-if="user">
                    <a-input-password v-model:value="user.password" />
                </a-form-item>
                <a-form-item>
                    <a-button class="button_container" type="primary" html-type="submit">
                        Сохранить
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        padding: 20px 100px 0 100px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;  
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
    
    .form_container {
        padding: 50px;
        width: 550px;
        margin: auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .button_container {
        background-color: #F14F4F;
    }
    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }

</style>