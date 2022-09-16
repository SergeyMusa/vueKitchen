<template>
  <div class="home">
    <div class="home__PageFirst">
      <PageFirst msg="Лучшие кухни Ставрополя" />
      <!-- <img alt="Vue logo" src="img/logo.webp"> -->
    </div>

    <div class="home__Benefit">
      <CBenefit />
    </div>

    <div class="home__Motivation">
      <CompMotivation />
    </div>

    <div class="home__Gallery">
      <CompCarousel />
    </div>

    <div class="home__Accordion">
      <PageAccordion />
      <!-- <slot></slot>
        </PageAccordion>  -->
    </div>

    <!-- <div class="home__AccordionW">
      <CompAccordionW />
    </div> -->

    <div class="home__Slider">
      <PageSlider />
      slider
    </div>

    <div>
      <CompJson />
    </div>
    <div id="#map" class="home__pageMap">
      <CompContact />
    </div>

    <template>
      <fab
        :z-index="101"
        :ripple-show="true"
        :actions="fabActions"

        @click="clickItem"
      ></fab>
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
import PageSlider from "@/components/PageSlider.vue";
import PageAccordion from "@/components/PageAccordionElements.vue";
// import CompAccordionW from "@/components/CompAccordionW.vue";
import CBenefit from "@/components/CBenefit.vue";
import fab from "vue-fab";
import CompJson from "@/components/CompJson.vue";

export default {
  name: "PageMain",
  components: {
    PageFirst,
    CompMotivation,
    CompCarousel,
    PageSlider,
    PageAccordion,
    // CompAccordionW,
    CompJson,
    CompContact,
    CBenefit,
    fab,
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

<style scoped>
/* FIXME: переделать на флекс  */

.home {
  /* border: 1px solid rgb(11, 192, 183); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.home__Accordion {
  border: 1px solid rgb(11, 192, 183);
}
.home__PageFirst {
  /* border: 1px solid rgb(0, 255, 0); */

  width: 80%;
  height: 55%;

  /* width: 80vw;
    height: 56vh; */
  margin-top: 10px;

  background-image: url(@/assets/img/s1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 20px 20px 50px white inset;
}
.home__Benefit {
  width: 85%;
  margin: 20px 0;
  /* padding: 0 50px; */
}
.Motivation {
  /* border: 1px solid rgb(104, 26, 169); */
  margin-top: 1px;
}
.home__pageMap {
  /* border: 1px solid rgb(60, 46, 192); */
  margin-top: 5%;
}
/* .vueperslide__title{
      border: 1px solid red;
}
p{
      border: 1px solid blue;
} */
</style>
