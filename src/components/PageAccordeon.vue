<template>
  <!-- TODO: -->
  <!-- FIXME: -->
  <div class="accordion">
    <div class="accordContainer">
      <!-- @click="accordArr.active = !accordArr.active" -->
      <div class="accordTitle">
        <div
          class="forClose"
v-for="(accordItem, index) in accordJson.accordArrJson"
          @click="clickElement(accordJson.accordArrJson, index)" 
         
          :key="index"
        >
          <!--         -->
<!--           v-for="(accordItem, index) in accordArr"
          @click="clickElement(accordArr, index)"  -->
          <!-- <template> -->
          <div v-html="accordItem.title" />
          <!-- {{ accordArr.title }} -->
          <div
            class="accordContent"
            v-show="accordItem.active"
            v-html="accordItem.details.join(' ')"
          >
            <!-- {{ accordArr.details }} -->
          </div>
          <!-- </template> -->
        </div>
        <span>
          <i class="material-icons close-btn" @click="closePopup">
            <!-- arrow_circle_down -->
            <ArrowDownCircleLine />
          </i>
          <!-- <MenuIcon /> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import PageAccordeonElements from "@/components/PageAccordeonElements.vue";
// import MenuIcon from "material-design-icons-iconfont";
import { ArrowDownCircleLine } from 'vue-icon-packs/ri'
import json from '@/json/dataAccordeon.json'

export default {
  name: "PageAccordeon",
  components: {
    // PageAccordeonElements,
    // MenuIcon,
    ArrowDownCircleLine
  },
  data: () => {
    return {
      // isElVisible: 1,
      accordJson: json,
      accordArr: [
        {
          id: 1,
          active: true,
          title: "<h3>Мебель под заказ</h3>",
          details: `
      <p style="text-align: justify">Обратитесь в "MEBEL"!</p>
      <p style="text-align: justify">
        Итак, вы решили
        <strong>купить корпусную мебель</strong> (кухни, шкафы, стенку,
        прихожую, спальню и т.п.) в Ставрополе, которая обладает
        нестандартными размерами или же специальной конфигурацией,
        необычной цветовой гаммой, то есть параметрами, которые не
        применяются при изготовлении стандартных моделей мебели.
      </p>
      <p style="text-align: justify">
        Если вы хотите привнести в интерьер вашего дома нечто необычное
        и индивидуальное, тогда обратитесь в "MEBEL"! Мы
        выполняем изготовление на заказ корпусной мебели практически
        любой сложности по ценам, которые вас приятно удивят! Позвоните
        нам по телефону&nbsp;8-988-759-77-29&nbsp;и оставьте заявку
        на&nbsp;выезд дизайнера-замерщика&nbsp;с образцами материалов
        для создания вашей уникальной мебели!
      </p>
    `,
        },
        {
          id: 2,
          active: false,
          title: "<h3>Предварительный этап</h3>",
          details: `
      <p style="text-align: justify">
        Специалист нашей компании в согласованный с вами день замерит
        помещение, прорисует предварительный эскиз корпусной мебели на
        заказ, согласует с вами схему ее расстановки, а также материалы,
        фурнитуру, комплектацию мебели и обсудит стоимость заказа. Если
        вы не готовы поделиться собственными дизайнерскими идеями, наш
        специалист предложит вам варианты оформления корпусной мебели.
      </p>
      <p style="text-align: justify">
        В случае вашего положительного решения на изготовление корпусной
        мебели силами нашей компании вы заключаете договор и вносите 50%
        предоплату от стоимости изделия. В данном случае выезд
        специалиста по г. Ставрополю для вас будет совершенно
        бесплатным. После заключения договора вы можете внести изменения
        в разработанный совместно с нашим специалистом проект корпусной
        мебели в течение 3х рабочих дней.
      </p>    `,
        },
        {
          id: 3,
          active: false,
          title: `<h3>Сроки изготовления мебели</h3>`,
          details: `
      <div class="panel-body">
        <p style="text-align: justify">
          Ваша мебель будет изготавливаться силами наших ответственных
          профессиональных мастеров в течение 15-45 рабочих дней со дня
          подписания договора (срок варьируется в зависимости от объема
          заказа и сложности исполнения проекта).<br />После доставки
          готовой корпусной мебели вы осуществляете окончательный
          расчет.<br />Сборка корпусной мебели осуществляется в
          согласованный с вами день представителями фабрики. Стоимость
          сборки составляет 10% от цены изделия и оплачивается отдельно.
        </p>
      </div>
      `,
        },
        {
          id: 4,
          active: false,
          title: `<h3>Наши преимущества</h3>`,
          details: `
      <div class="panel-body">
              <p style="text-align: justify">
                Наши преимущества:<br />- возможность воплотить в жизнь ваш
                индивидуальный проект;<br />- высокое качество и надежность
                мебельной продукции;<br />- гарантия на корпусную мебель
                составляет целых 18 месяцев, а также включает в себя бессрочное
                послегарантийное обслуживание;<br />- наличие собственного
                производства позволяет нам быстро выполнять заказ (Вам не
                придется долго ждать выполнения или доставки заказа, выезда
                специалиста для замера;<br />- превосходное соотношение цены и
                качества мебели;<br />- возможность изготовления прямых и
                радиусных фасадов, а также эмалевых фасадов;<br />- огромное
                разнообразие фасадных цветов, мебельных аксессуаров и
                фурнитуры;<br />- разнообразные и качественные материалы для
                создания фасадов, а именно:
              </p>
              <ul>
                <li style="text-align: justify">ДСП и ламинированная ДСП;</li>
                <li style="text-align: justify">МДФ пластик;</li>
                <li style="text-align: justify">МДФ с пленкой ПВХ;</li>
                <li style="text-align: justify">МДФ эмаль;</li>
                <li style="text-align: justify">массив (дуб, бук, ясень);</li>
              </ul>
              <p style="text-align: justify">
                - подетальный просчет цены при составлении эскиза.
              </p>
              <p style="text-align: justify">
                Вы можете также составить свой эскиз кухни и переслать нам по
                электронной почте и мы рассчитаем стоимость изделия.
              </p>
            </div>
      `,
        },
        {
          id: 5,
          active: false,
          title: `<h3>Наша цель</h3>`,
          details: `
      <div class="panel-body">
              <p style="text-align: justify">Наша Цель:</p>
              <p style="text-align: justify">
                Благоустройство жилья наших клиентов мебелью для улучшения их
                качества жизни, а также для комфортной работы, учёбы. Благодаря
                производству мебели по эскизам заказчика мы учитываем
                индивидуальность каждого обратившегося к нам человека, применяя
                в своей работе богатый опыт, знания дизайнера и производителя
                мебели, традиционные и новейшие материалы, инновационные
                технологии.
              </p>
              <p style="text-align: justify">
                Мы сможем помочь вам в создании интерьера, о котором вы всегда
                мечтали!
              </p>
            </div>
      `,
        },
        {
          id: 6,
          active: false,
          title: `<h3> Как оформить заказ на корпусную мебель?</h3>`,
          details: `
      <div class="panel-body">
              <p style="text-align: justify">
                <strong>Как оформить заказ на корпусную мебель?</strong>
              </p>
              <p style="text-align: justify">
                Если вы ищете мебель на заказ от производителя в Ставрополе или
                хотите заказать мебель по индивидуальному проекту,&nbsp;вызвать
                замерщика&nbsp;на нестандартную мебель под заказ, звоните по
                телефону: 8-988-759-77-29.
              </p>
              <p style="text-align: justify">
                Мы готовы сделать для вас по выгодной цене шкафы-купе на заказ,
                кухни, стенки, прихожие на заказ, а также любую другую корпусную
                мебель!
              </p>
            </div>
      `,
        },
      ],
    };
  },
  methods: {
    closePopup() {
      // console.log("closePopup");
      let newNewAccordArr = this.accordJson.accordArrJson;
      Object.keys(newNewAccordArr).forEach(function (id) {
        newNewAccordArr[id].active = false;
      });
    },
    clickElement(newAccordArr, index) {
      // чтобы остальные вкладки закрывались
      // Object.keys(newAccordArr).forEach(function (id) {
      //   newAccordArr[id].active = false;
      // });
// <!-- TODO: -->
      // console.log("accordArrJson_" + this.accordJson.creater);


      this.closePopup();
      this.accordJson.accordArrJson[index].active = !this.accordJson.accordArrJson[index].active;

      // console.log(`--> "accordArr_id_${index}_"+_is_${this.accordArr[index].active}`);
      // console.dir("newAccordArr_2_"+JSON.stringify(newAccordArr)); //~~~!!! OK
    },
  },
};

// console.log("accordArrJson_" + this.json);

// accordJson/accordArrJson
// ----------
</script>

<style scoped lang="scss">
.accordion {
  // width: 80vw;
}
.accordContainer {
  /* display: flex; */
  // border: 1px solid rgb(67, 220, 21);
}
.accordTitle {
  // border: 3px solid red;
  position: relative;

  z-index: 10;

  color: #fff;

  /* border-color: #fff; */
  border-bottom-width: 2px;

  background: white;
  background-color: #2779bd;

  margin-right: auto !important;
  margin-left: auto !important;
  /* border-color: grey; */
  /* border: 1px; */
  margin-top: 2px;

  // padding: 15px;

  &:hover {
    cursor: pointer;
    background-color: #0d6bb8;
  }

  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

.accordContent {
  // border: 3px solid rgb(149, 13, 177);
  // position: relative;
  // height: 100px;

  padding: 0 20px;
  // margin: 7px;
  color: black;
  background: #fff;
  animation: ani 1.5s forwards;
}
@keyframes ani {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

  // 0% {transform: translateY(-70%);}
  // 100% {transform: translateY(0);}
}
.forClose {
  border: 1px solid white;
  position: relative;
}
.close-btn {
  z-index: 16;
  // width: 30px;
  font-size: 1.6em;
  // border: 3px solid rgb(255, 2, 6);
  // color: black;
  color: lightgray;
  // padding: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
  // 

  &:hover {
    color: rgb(104, 1, 1);
    cursor: pointer;
  }

  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}
</style>
