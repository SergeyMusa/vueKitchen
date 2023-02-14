<template>
  <div class="home">
    <div class="home__PageFirst">
      <PageFirst msg="Лучшие кухни Ставрополя" />
      <!-- <img alt="Vue logo" src="img/logo.webp"> -->
    </div>

    <div class="home__Present">
      <CPresent />
    </div>

    <div class="home__Benefit">
      <CBenefit />
    </div>

    <!-- <div class="home__CANVAS">
      <CCanvas />
    </div> -->

    <div class="home__Motivation">
      <CompMotivation />
    </div>

    <div class="home__Cards">
      <CCards />
      <!-- CCards -->
    </div>

    <!-- DELETE IT -->
    <div class="home__Gallery">
      <CompCarousel />
    </div>

    <div class="home__Accordeon">
      <PageAccordeon />
      <!-- <slot></slot>
        </PageAccordeon>  -->
    </div>

    <!-- <div class="home__AccordeonW">
      <CompAccordionW />
    </div> -->

    <div class="home__Slider">
      <CCarousel
        :carousel_data="sliderItems"
        :slideWidth="300"
        :interval="7000"
      />
    </div>

    <div>
      <CompJson />
    </div>
    <div id="#map" class="home__pageMap">
      <CompContact />
    </div>

    <template>
      <!-- <fab
        :z-index="101"
        :ripple-show="true"
        :actions="fabActions"

        @click="clickItem"
      ></fab> -->

      <!-- :position="bottom-left"
        :position-type="fixed"
        :z-index="101"
        :ripple-show="true"
        :main-icon="phone_callback"
        :actions="fabActions"

        @click="clickItem"
        @cache="cache"
        @alertMe="alert" -->

      <!-- volunteer_activism -->
      <!-- main-icon="@/assets/img/2015_moika3.jpg" -->
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import PageFirst from "@/components/PageFirst.vue";
import CompCarousel from "@/components/CompCarousel.vue";
import CompContact from "@/components/CompContact.vue";
import CompMotivation from "@/components/CompMotivation.vue";
import CCarousel from "@/components/CCarousel.vue";
import PageAccordeon from "@/components/PageAccordeon.vue";
// import CompAccordionW from "@/components/CompAccordionW.vue";
import CBenefit from "@/components/CBenefit.vue";
// import fab from "vue-fab";
import CompJson from "@/components/CompJson.vue";
import CPresent from "@/components/CPresent.vue";
import CCards from "@/components/CCards.vue";
// import CCanvas from "@/components/CCanvas.vue";
  


export default {
  name: "PageMain",
  components: {
    PageFirst,
    CompMotivation,
    CompCarousel,
    CCarousel,
    PageAccordeon,
    // CompAccordionW,
    CompJson,
    CompContact,
    CBenefit,
    CPresent,
    CCards,
    // CCanvas,
    // fab,
  },
  data() {
    return {
      fabActions: [
        {
          icon: "done",
          title: "good job!",
          color: "#ff9900",
        },
        {
          icon: "toc",
          title: "",
          color: "#999",
        },
      ],
      mainBtnColor: "#3eaf7c",
      sliderItems: [
        {
          id: 1,
          name: "sliderImg1",
          img: "p1.jpeg",
          descr: "Собственный цех с современным оборудованием",
        },
        {
          id: 2,
          name: "sliderImg2",
          img: "p2.jpeg",
          descr:
            "Основные сотрудники работают на своих местах уже более 10 лет",
        },
        {
          id: 3,
          name: "sliderImg3",
          img: "p3.jpeg",
          descr:
            "Огромный выбор фурнитуры, практически любая из имеющейся на рынке",
        },
        { id: 4, name: "sliderImg4", img: "p4.jpeg", descr: "1" },
      ],
    };
  },
  methods: {
    clickItem: function (item) {
      window.alert(item.idx);
      console.log("CLICK");
    },
  },
};
</script>

<style scoped lang="scss">
%pagemargin {
  width: 80%;
  margin: 20px 0;
  border: 1px solid rgb(255, 157, 0); 
}
/* FIXME: переделать на флекс  */

.home {
  /* border: 1px solid rgb(11, 192, 183); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* min-height: 100vh; */
  flex: 1;

  &__Accordeon {
    @extend %pagemargin ;
  }
  &__Slider {
    @extend %pagemargin ;
  }

  &__PageFirst {
    @extend %pagemargin ;
    margin-top: 10px;

    background-image: url(@/assets/img/s1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 20px 20px 50px white inset;
  }
  &__Present {
    position: fixed;
    bottom: 50px;
    left: 10px;
    opacity: 0.7;
  }
  &__Benefit {
    @extend %pagemargin ;
  }
  &__Motivation {
    @extend %pagemargin ;
    // margin-top: 1px;
  }
  &__Cards {
    @extend %pagemargin ;
  }
  &__Gallery {
    @extend %pagemargin ;
  }
  &__pageMap {
    /*  */border: 1px solid rgb(60, 46, 192);
    margin-top: 5%;
    // @extend %pagemargin ;

  }
  /* .vueperslide__title{
      border: 1px solid red;
}
p{
      border: 1px solid blue;
} */
}
</style>
