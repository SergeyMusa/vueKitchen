<template>
  <div class="benefit">
    <div class="benefit__top">
      <h2>Почему стоит рассмотреть наш салон «Кухни-26»</h2>
    </div>
    <div class="benefit__items">
      <div class="benefit__item" v-for="item in benefitArr" :key="item.id">
        <div class="benefit__pict">
          <!-- <img :src="(`${item.pict}`)" height="30px" /> -->
          <img :src="require(`../assets/img/benefit/b${item.id}.png`)" height="30px" />
          <!-- <img
                :id="benefit_{{benefitArr.id}}",
                alt="benefit_{{benefitArr.header}}"
                src="../assets/img/benefit/b1.png"
                height="100px"
            /> -->
          <!-- <div>{{ item.pict }}</div> -->
        </div>
        <div class="benefit__item-message">
          <h3>{{ item.header }}</h3>
          <p>{{ item.message }}</p>
        </div>
        <!-- <div v-for="n in 100">
            <img v-bind:src="`../assets/photos/${n}.png`">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CBenefit",
  props: {},
  data() {
    return {
      benefitArr: [
        {
          id: 1,
          header: "Гарантия 20 лет",
          pict: require("../assets/img/benefit/b1.png"),
          message:
            "Мы уверены в своих кухнях благодаря собственному производству: больше никто из российских производителей не дает такой гарантии",
        },
        {
          id: 2,
          header: "22 года на рынке",
          pict: require("../assets/img/benefit/b2.png"),
          message: 'Мы изготовили более 500 тысяч кухонь по индивидуальному проекту',
        },
        {
          id: 3,
          header: "Экологичность",
          pict: "../assets/img/benefit/b3.png",
          message: 'Европейские материалы и комплектующие обеспечивают безопасность кухонь',
        },
        {
          id: 4,
          header: "Надежная фурнитура",
          pict: "../assets/img/benefit/b4.png",
          message: 'Фурнитура немецкой компании Hettich гарантирует более 80 тысяч открываний/закрываний ящиков — плавно и бесшумно',
        },
                {
          id: 5,
          header: "Уместится все",
          pict: "../assets/img/benefit/b5.png",
          message: 'Наши решения для хранения позволят вместить все от столовых приборов до бытовой химии и посуды',
        },
                {
          id: 6,
          header: "Кредит без переплаты",
          pict: "../assets/img/benefit/b6.png",
          message: 'При покупке в кредит мы даем скидку в размере банковских процентов по кредиту',
        },
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
.benefit {
  border: 1px solid rgb(192, 159, 11);

  display: flex;
  flex-direction: column;
  height: 100%;
}
.benefit__items {
    /* border: 1px solid rgb(192, 11, 50); */

  display: flex;
  flex-direction: row;
  /* height: 100%; */

  justify-content : space-evenly ;
  flex-wrap: wrap;
}
.benefit__item {
  /* border: 1px solid rgb(11, 192, 47); */

  width: 30% ;
  /* height: 40%; */
  margin: 10px 20px;

  display: flex;
  flex-direction: row;
  /* justify-content: center; */
}
.benefit__pict {
  /* border: 1px solid rgb(192, 11, 192); */

  display: flex;
  align-items:center;
}

.benefit__item-message {
    /* border: 1px solid rgb(20, 11, 192); */

  display: flex;
  flex-direction: column;

}
.benefit__item-message p{
  text-align: left;
  padding-left: 10px;
}
</style>
