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
</style>