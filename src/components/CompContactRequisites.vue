<template>
  <!-- CompContactRequisites -->
  <div id="map">
    <div class="btn">
      <!-- FIXME: сделать  переключение табов по активной-->
      <!-- <ul> -->
      <!-- непонял как передать клас в кнопку -->
      <!-- <p class="tab has-icon leftstr "><MainBtn btnName="Контакты" btnUrl="#tab_Контакты" btnStyle="isActive" /></p> -->
      <!-- v-on:click="doActiv" -->
      <!-- <p class="tab leftstr isActive" @click="doActiv" :class="classActive == 'true' ? 'isActive' : 'hidde'"><MainBtn btnName="Контакты" btnUrl="#tab_Контакты" btnStyle="isActive" /></p> -->

      <p class="tab1 " @click="show = !show">
        <BaseBtn :btnName="btnText" :btnUrl="`#tab_${btnText}`" />
      </p>
      <!-- <br><br><br><br><br> -->
      <!-- <p class="tab2 rightstr " @click="show=!show"><MainBtn btnName="Контакты Реквизиты" btnUrl="#tab_Реквизиты" /></p> -->

      <!-- </ul> -->
    </div>
    <div class="isActiv1" v-if="show">
      <ul>
        <strong>Телефон:</strong>
        <li class="top">8 800 201-64-82</li>
        <li class="top">+7 (985) 318-41-43</li>
      </ul>
      <ul>
        <strong>Email:</strong>
        <li class="top">info@fruitsparadise.ru</li>
      </ul>
      <ul>
        <strong>Адрес:</strong>
        <li class="top">Москва, ул. Щепкина, 58,</li>
      </ul>
      <hr />
      <ul class="grafik">
        <strong>График работы:</strong>
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
          <div v-t="'message.hello'"></div>
          <p>&nbsp;</p>
        </li>
      </ul>
      <hr />
      <p>Заказы обратного звонка через сайт принимаются круглосуточно!</p>
      <BaseBtn btnName="Заказать  📞 " btnUrl="#call" />
      <!-- <a href="/katalog" target="_self" class="button primary"> -->
      <!-- <span>КАТАЛОГ</span> -->
      <!-- </a> -->
    </div>

    <div class="isActiv2" v-else>
      <a href="/o-kompanii" target="_self" class="button primary is-outline">
        <p><span>Узнать больше о КОМПАНИИ</span></p>
      </a>

      <div class="panel entry-content" id="tab_Реквизиты">
        <p><strong>ИП Корюкин Иван Александрович</strong></p>
        <hr />
        <br />
        <p>ИНН: 772811528920</p>
        <p>ОГРНИП:&nbsp;318774600200865</p>
        <p>Дата присвоения ОГРНИП&nbsp;11.04.2018</p>
        <p>Код ОКПО: 0129058467</p>
        <hr />
        <br />
        <p><strong>Банковские реквизиты:</strong></p>
        <p>р/с 40802810602870004678</p>
        <p>АО «АЛЬФА-БАНК»</p>
        <p>БИК 044525593</p>
        <p>к/с 30101810200000000593</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
// import MainBtn from "@/components/base/BaseBtn.vue";

export default {
  name: "CompContactRequisites",
  components: {
    // MainBtn,
  },
  data() {
    return {
      leftTab: true,

      show: true,
      hasError: false,
    };
  },
  computed: {
    // Контакты Реквизиты
    btnText: function () {
      if (this.show) {
        return "Контакты";
      }
      return "Реквизиты";
    },
  },
  methods: {
    // FIXME:   менять класс на кнопке
    //  doActiv: function (event) {
    doActiv: function () {
      // console.log(this.isActive);
      if (this.show === true) {
        this.show = false;
      } else {
        this.show = true;
      }
      //    console.log(this.isActive);
      // // `this` внутри методов указывает на экземпляр Vue
      //     alert('Привет, ' + this.name + '!')
      // // `event` — нативное событие DOM
      //     if (event) {
      //         alert(event.target.tagName)
    },
  },
  //   props: {
  //     msg: String
  //   },
};
</script>

<style scoped>
#map{
    display: block;
}
.hidden {
  /* display:none; */
  visibility: hidden;
  /* background-color: #20e2db; */
}
.isActive {
  /* box-shadow: 0 0 0 3px lightskyblue; */
  /* background-color: #47e220; */
}

.isActiv p {
  line-height: 0.9;
  /* margin: 0 10px;
    padding: 0 10px; */
  margin-bottom: 5px;
}
.isActiv2,
.isActiv2 {
  width: 25.5vw;
  height: 60.5vh;
}
.grafik p {
  margin: 5px 0;
  /* padding: 0 0; */
}
ul {
    margin-left: -60px;
  /* display: table; */
  /* display: inline; */
}
li{
    /* margin-left: 160px; */
}
.top {
  text-align: left;
  margin: auto 7vw;
}
.leftstr,
.rightstr {
  float: left; /* Обтекание справа */
  width: 50%; /* Ширина текстового блока */
}
.rightstr {
  text-align: center; /* Выравнивание по правому краю */
}
.noMark {
  list-style-type: none;
}
.addBottom {
  border: 1px solid rgb(192, 159, 11);
  margin-bottom: 15px;
}
/* .btn{
margin-left: 60px;
} */
/* .isActive {
	box-shadow: 0 0 0 3px lightskyblue;
	background-color: #2047e2;
} */
</style>
