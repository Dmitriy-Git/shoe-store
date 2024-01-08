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
        margin: 30px 0 30px 0;
        align-self: center;
        width: 30%;
    }

    img {
        width: 500px;
        height: 400px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
</style>