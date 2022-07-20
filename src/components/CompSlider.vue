<template>
    <div class="slider">
       <!-- TODO: -->     
      <hr>
        <button @click="parallax *= -1;$refs.myVueperSlides.refreshParallax()">
          reverse parallax effect
        </button>
        <button @click="parallaxFixedContent = !parallaxFixedContent">
          Add a fix title
        </button>

        <vueper-slides ref="myVueperSlides" :parallax="parallax" :parallax-fixed-content="parallaxFixedContent">
          <vueper-slide
            v-for="(slide, i) in slides" :key="i"
            :image="slide.image"
            :title="parallaxFixedContent ? slide.title : ''"
            :content="parallaxFixedContent ? slide.content : ''" />
        </vueper-slides>
      <hr>  
        <!-- <a href="#insta"
          ><img class="socPict" alt="insta" src="../assets/img/k/k1.jpg"
        /></a> -->
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    name: "CompCarousel",
    components: {
      VueperSlides, VueperSlide
    },
    data: () => ({
    slides: [
      {
        title: 'Кухня 23 из дуба',
      content: 'Стоит 200 тыс.руб.',
      // You can also provide a URL for the image.
      image: require('@/assets/img/k/k1.jpg')
      },
      {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/k/k2.jpg')
      },
      {
        title: 'Кухня 111 из дdfdsfsdffdsf',
        content: 'Slide 3 content.',
        image: require('@/assets/img/k/k3.jpg')
      }
    ]
  })
}
</script>

<style scoped>
.slider{
  width: 75vw;
}
</style>