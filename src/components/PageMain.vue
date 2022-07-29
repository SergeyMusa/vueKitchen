<template>
  <div class="home">
    <div class="home__PageFirst">
      <PageFirst msg="Лучшие кухни Ставрополя" />
      <!-- <img alt="Vue logo" src="img/logo.webp"> -->
    </div>
  
    <div class="home__PageSecond">
      <PageSecond />
    </div>
    
    <div class="home__Gallery">
      <CompCarousel />
    </div>
    
    <div class="home__Accordion">
      <CompAccordion />
    </div>

    <div class="home__Slider">
      <CompSlider />
      slider
    </div>

  <div>
       <CompJson /> 
    </div>
    <div id="#map" class="home__pageMap">
      <CompContact />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PageFirst from "@/components/PageFirst.vue";
import CompCarousel from "@/components/CompCarousel.vue";
import CompContact from "@/components/CompContact.vue";
import PageSecond from "@/components/PageSecond.vue";
import CompSlider from "@/components/CompSlider.vue";
import CompAccordion from "@/components/CompAccordion.vue";
import CompJson from "@/components/CompJson.vue";

export default {
  name: "PageMain",
  components: {
    PageFirst,
    PageSecond,
    CompCarousel,
    CompSlider,
    CompAccordion,
      CompJson,
    CompContact
  },
}
</script>

<style scoped>
/* FIXME: переделать на флекс  */
.home {
  /* border: 1px solid rgb(11, 192, 183); */

  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  align-items: center;
}
.home__PageFirst{
  /* border: 1px solid rgb(0, 255, 0); */
    width: 73%;
    height: 54%;
  margin-top: 10px;
    
    background-image: url(@/assets/img/s1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 20px 20px 50px white inset;
}
.home__PageSecond {
  /* border: 1px solid rgb(104, 26, 169); */
  margin-top: 1px;
}
.home__pageMap{
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
