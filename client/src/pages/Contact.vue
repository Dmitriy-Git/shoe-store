<script setup>
    import { 
        YandexMap, 
        YandexMapMarker, 
        YandexMapDefaultFeaturesLayer, 
        YandexMapDefaultSchemeLayer,
        YandexMapControls,
        YandexMapZoomControl,
        YandexMapListener 
    } from 'vue-yandex-maps';
    import Marker from '../assets/marker.svg'

    const setting = {
        location: {
          center: [37.705813 , 55.782821],
          zoom: 13,
        },
    }

    const settingMarkers = {
        coordinates: [37.705813 , 55.782821],
    }

    const logMapClick = (object, event) => console.log(object, event);

    const marketStyle = {
        width: '40px',
        height: '40px',
        position: 'relative',
        boxSizing: 'border-box',
        transform: 'translate(-50%, calc(-50% - 24px))',
        cursor: 'pointer',
  };
</script>

<template>
    <div class="container">
        <div>
            <h2>Контакты</h2>
            <p>+7 800 789 89 89</p>
            <p>Большая Семёновская улица, 17А</p>
            <div class="form_container">
                <h2 style="color: #FFFFFF;">Есть вопросы?</h2>
                <p style="color: #FFFFFF;"> Заполните форму и наш <br /> менеджер свяжется с вами </p>
                <a-form name="about" class="form_content">
                    <a-form-item name="username" :rules="[{ required: true, message: 'Пожалуйста, введите имя' }]">           
                        <a-input placeholder="Имя" />
                    </a-form-item>
                    <a-form-item name="phone" :rules="[{ required: true, message: 'Пожалуйста, введите номер телефона' }]">           
                        <a-input placeholder="Номер телефона" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" class="button_container">
                            Подписаться 
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <yandex-map :settings="setting" width="70%" height="500px">
            <yandex-map-default-scheme-layer/>
            <yandex-map-default-features-layer/>
            <yandex-map-marker :settings="settingMarkers">
                <Marker :style="marketStyle" />
            </yandex-map-marker>
            <yandex-map-controls :settings="{ position: 'left bottom' }">
                <yandex-map-zoom-control />
            </yandex-map-controls>
            <yandex-map-listener :settings="{ onClick: logMapClick }" />
        </yandex-map>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding: 0 100px;
        margin: 20px auto;
    }

    .form_container {
        background-color: #484283;
        display: flex;
        flex-direction: column;
        padding: 20px 50px 0 50px;
        border-radius: 4px;
    }

    .form_content {
        width: 200px; 
        display: flex; 
        flex-direction: column;
    }

    .button_container {
        background-color: #F14F4F;
        width: 200px;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
    }
</style>