<template>
    <div class="slider">
       <!-- TODO: -->     
      <hr>

      <h1>
        <CModalElements msg="Переданное из Карусели сообщение"/>
      </h1>

      <vueper-slides
        ref="vueperslides1"
        :touchable="false"
        fade
        :autoplay="false"
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        fixed-height="400px"
        >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image">
        </vueper-slide>
      </vueper-slides>

      <vueper-slides
        class="no-shadow thumbnails"
        ref="vueperslides2"
        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
        :visible-slides="slides.length"
        fixed-height="75px"
        fixed-width="100px"
        :bullets="false"
        :touchable="false"
        :gap="2.5"
        :arrows="false">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          @click.native="$refs.vueperslides2.goToSlide(i)">
        </vueper-slide>
      </vueper-slides>
      <hr>  
        <!-- <a href="#insta"
          ><img class="socPict" alt="insta" src="../assets/img/k/k1.jpg"
        /></a> -->
    </div>
</template>

<script>
import CModalElements from "@/components/CModalElements.vue"

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    name: "CompCarousel",
    components: {
      CModalElements,
      VueperSlides, 
      VueperSlide
    },

    data: () => ({
    slides: [
      {
        title: 'Кухня 23 из дуба',
      content: 'Стоит 200 тыс.руб.',
      image: require('@/assets/img/1/1.jpg')
      },
      {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/2.jpg')
      },
      {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/3.jpg')
      },
            {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/4.jpg')
      },
            {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/5.jpg')
      },
            {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/6.jpg')
      },
            {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/1/7.jpg')
      },
    ]
    
  })
}
</script>

<style scoped>
.slider{
  /* width: 80vw;
      border: 1px solid rgb(214, 125, 9); */

}
.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}
</style>