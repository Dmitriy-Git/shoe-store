<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const formState = reactive({
  username: '',
  password: '',
});

const store = useStore()
const router = useRouter()

const error = computed(() => store.getters[`auth/getError`])

const onFinish = (values) => {
  store.dispatch('auth/login', values)
    .then(() => { router.push({ path: '/' }) })
};
</script>

<template>
    <div class="container">
      <a-form
          name="login"
          :model="formState"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          style="width: 100%;"
      >
        <a-form-item
          label="Имя пользователя"
          name="username"
          :rules="[{ required: true, message: 'Обязательное поле' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Пароль"
          name="password"
          :rules="[{ required: true, message: 'Обязательное поле' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <div v-if="error" class="error_container">
            <span style="color: #ff4d4f;">
              {{ error }}
            </span>
        </div>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button class="button_container" type="primary" html-type="submit">Войти</a-button>
        </a-form-item>
      </a-form>
    </div>
</template>

<style scoped>
    .container {
        width: 40%;
        margin: auto;
        display: flex;
        justify-content: center;
        position: absolute;  
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
    }
    .button_container {
        background-color: #F14F4F;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }

    .error_container {
      display: flex; 
      justify-content: center; 
      margin-bottom: 24px;
    }
</style>