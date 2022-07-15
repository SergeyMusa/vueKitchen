<template>
    <div>
        <carousel-3d>
            <slide :index="0">
                Slide 1 Content
                <!-- FIXME: -->
                <!-- <img :src="imgUrl" alt="My Kitchen ${i}"> -->
                <!-- height="100px" -->
            </slide>
            <slide :index="1">
                Slide 2 Content
                {{i}}
            </slide>
            <slide :index="2">
                Slide 3 Content
                <!-- {{ii}} -->
            </slide>
        </carousel-3d>

        <!-- <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                </template>
            </slide>
        </carousel-3d> -->
        <a href="#insta"
          ><img class="socPict" alt="insta" src="../assets/img/k/k1.jpg"
        /></a>
    </div>
</template>

<script>
import { Carousel3d, Slide, } from 'vue-carousel-3d';
// import { i } from 'CompCarousel';

export default {
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      i: 5,
    //   alt: "kitchen",
    // <!-- FIXME: -->
      // imgUrl: "../assets/img/k/k1.jpg"
    }
  },
  computed:{
        //   alt: `"kitchen" this.i`,
    // // imgUrl (){
    // //    return this.url + ${i} 
    // // }
    //     console.log(this.alt);

  },
    //  slide: `img/k1/k{{i}}`
    //   ...
};

</script>
