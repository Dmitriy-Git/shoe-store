<script setup>
    import aboutImg from '../assets/about.jpg'
</script>

<template>
    <div class="container">
        <div class="header-about">
            <div>
                <h2 style="color: #FFFFFF;">Пара слов о нас</h2>
                <p style="color: #FFFFFF;"> Спорт держит нас в форме. Учит дисциплине. <br/>
                    Объединяет нас. Через спорт мы можем менять жизни. <br/>
                    В том числе с помощью воодушевляющих историй спортсменов. <br/>
                    Чтобы помочь тебе подняться и двигаться вперед. 
                </p>
                <h3 style="color: #FFFFFF;">- SneakMax</h3>
            </div>
            <div class="crop">
                <img :src="aboutImg" />
            </div>
        </div>
        <div class="form_wrapper">
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
            <div class="questions_container">
                <h2>Часто задаваемые вопросы</h2>
                <a-collapse ghost>
                    <a-collapse-panel key="1" header="Бесплатна ли доставка">
                        <p> Доставка бесплатна, если сумма заказа превышает 15000 рублей </p>
                    </a-collapse-panel>
                    <a-collapse-panel key="2" header="Сколько дней на возврат">
                        <p> Вернуть товар можно в течении 30 дней </p>
                    </a-collapse-panel>
                    <a-collapse-panel key="3" header="Есть ли гарантия на обувь">
                        <p> На всю продукцию действует гарантия год со дня покупки </p>
                    </a-collapse-panel>
                </a-collapse>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .header-about {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #484283;
        padding: 0 100px;
    }

    .questions_container {
        margin-top: 20px;
        padding: 0 100px;
        width: 50%;
        align-self: center;
    }

    img {
        width: 500px;
        height: 400px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }

    .button_container {
        background-color: #F14F4F;
        width: 200px;
    }

    .button_container:hover {
        background-color: #F14F4F;
        opacity: 0.6;
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

    .form_wrapper {
        display: flex; 
        margin: 20px 0 20px 0; 
        justify-content: center;
    }
</style>