<template>
  <div class="home">

      <div class="PageFirst">
        <PageFirst msg="Лучшие кухни Ставрополя" />
        <!-- <img alt="Vue logo" src="img/logo.webp"> -->
      </div>
    
      <div class="PageSecond">
        <PageSecond />
      </div>
      
      <div class="pageGallery">
        <CompCarousel />
      </div>

      <div id="#map" class="pageMap">
        <CompMap />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageFirst from "@/components/PageFirst.vue";
import CompCarousel from "@/components/CompCarousel.vue";
import CompMap from "@/components/CompMap.vue";
import PageSecond from "@/components/PageSecond.vue";

export default {
  name: "PageMain",
  components: {
    PageFirst,
    PageSecond,
    CompCarousel,
    CompMap
  },
}
</script>

<style scoped>
/* FIXME: переделать на флекс  */
.home {
    border: 1px solid blue;
}
.PageFirst{

  border: 1px solid red;
  margin-top: 300px;

  margin-top: 10%;
    background-repeat: no-repeat;
  background-image: url(@/assets/img/s1.jpg);
}
.PageSecond {
  border: 1px solid blue;
  margin-top: 300px;
}
.pageMap{
  margin-top: 5%;
}

</style>
