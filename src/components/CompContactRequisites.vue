<template>
  <div>
    <!-- CompContactRequisites -->
    <div id="map">

 <!-- FIXME: сделать  переключение табов по активной-->        
       <ul>

        <p class="tab has-icon leftstr active"><MainBtn btnName="Контакты" btnUrl="#tab_Контакты" /></p>
        <p class="tab has-icon rightstr "><MainBtn btnName="Реквизиты" btnUrl="#tab_Реквизиты" /></p>

      </ul>

      <div class="tab-panels">
        <div class="isActiv" id="tab_Контакты">
            <ul><strong>Телефон:</strong>
                <li class="top">8 800 201-64-82</li>
                <li class="top">+7 (985) 318-41-43</li>
            </ul>
            <ul><strong>Email:</strong>
                <li class="top">info@fruitsparadise.ru</li>
            </ul>
            <ul><strong>Адрес:</strong>
                <li class="top">Москва, ул. Щепкина, 58,</li>
            </ul>
            <hr>
            <ul class="grafik"><strong>График работы:</strong>
                <li class="noMark">
                    <p class="leftstr">Понедельник</p>
                    <p class="rightstr">с 10:00 до 17:00</p>
                </li>
                <li class="noMark">
                    <p class="leftstr">Вторник</p>
                    <p class="rightstr">с 9:00 до 20:00</p>
                </li>
                <li class="noMark">
                    <p class="leftstr">-----</p>
                    <p class="rightstr">-----</p>                                    
                </li>
                <li class="noMark">
                    <p class="leftstr">Суббота</p>
                    <p class="rightstr">с 9:00 до 20:00</p>                    
                </li>                
                <li class="noMark">
                    <p class="leftstr">Воскресенье</p>
                    <p class="rightstr">с 10:00 до 17:00</p>
                    <!--  -->
                </li>
            </ul> 
            <hr>
                <p>Заказы обратного звонка через сайт принимаются круглосуточно!</p>
                <MainBtn btnName="Заказать  📞 " btnUrl="#call" />
                <!-- <a href="/katalog" target="_self" class="button primary"> -->
                <!-- <span>КАТАЛОГ</span> -->
                <!-- </a> -->
        </div>

        <div class="isActiv hidden">
          <a
            href="/o-kompanii"
            target="_self"
            class="button primary is-outline"
          >
            <span>УЗНАТЬ О КОМПАНИИ</span>
          </a>

          <div class="panel entry-content" id="tab_Реквизиты">
            <p><strong>ИП Корюкин Иван Александрович</strong></p>
            <p>ИНН: 772811528920</p>
            <p>ОГРНИП:&nbsp;318774600200865</p>
            <p>Дата присвоения ОГРНИП&nbsp;11.04.2018</p>
            <p>Код ОКПО: 0129058467</p>
            <p><strong>Банковские реквизиты:</strong></p>
            <p>р/с 40802810602870004678</p>
            <p>АО «АЛЬФА-БАНК»</p>
            <p>БИК 044525593</p>
            <p>к/с 30101810200000000593</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBtn from "@/components/MainBtn.vue";

export default {
  name: "CompContactRequisites",
   components: {
    MainBtn,
   },
  data() {
    return {
        leftTab: true,
      };
    },

//   props: {
//     msg: String
//   },
}
</script>

<style scoped>
.hidden{
    display:none;
}
.isActiv p{
    line-height: 0.9;
   /* margin: 0 10px;
    padding: 0 10px; */
    margin-bottom: 5px;
}

.grafik p{
margin: 5px 0 ;
/* padding: 0 0; */
}
ul{
    /* display: table; */
}
.top{
    text-align: left;
    margin: auto 20% ;
}
.leftstr, .rightstr {
    float: left; /* Обтекание справа */ 
    width: 50%; /* Ширина текстового блока */ 
}
.rightstr {
    text-align: center; /* Выравнивание по правому краю */ 
}
.noMark{
    list-style-type: none;
}
.addBottom{
      border: 1px solid rgb(192, 159, 11);
    margin-bottom: 15px;
}
</style>
