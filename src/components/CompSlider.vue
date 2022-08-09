<template>
    <div class="slider">
       <!-- FIXME: -->     
      <hr>

        <!-- <button @click="appendSlide" >
          <i class="icon material-icons">add</i> Add Slide
        </button>
        <button @click="removeSlide" >
          <i class="icon material-icons">remove</i> Remove Slide
        </button>
        <button @click="toggleSlideshow" >
          <i class="icon material-icons"> {{ slideshowDisabled ? 'check_circle' : 'highlight_off'}}</i> {{ slideshowDisabled ? 'Enable' : 'Disable' }} Slideshow
        </button> -->
        <vueper-slides
          :slide-ratio="0.2"
          :infinite="false"
          disable-arrows-on-edges
          bullets-outside
          :disable="slideshowDisabled">
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content"
            :style="'background-color: ' + ['red'][i % 2]" />
              <!-- :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" /> -->

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
    name: "CompSlider",
    components: {
      VueperSlides, VueperSlide
    },
    data: () => ({
    slides: [
      {
        title: 'Кухня 23 из дуба',
      content: 'Стоит 200 тыс.руб.',
      // You can also provide a URL for the image.
      image: require('@/assets/img/p/p1.jpeg')
      },
      {
        title: 'Кухня 2233 из дуdsfdsfdsf',
        content: 'Slide 2 content.',
        image: require('@/assets/img/p/p2.jpeg')
      },
      {
        title: 'Кухня 111 из дdfdsfsdffdsf',
        content: 'Slide 3 content.',
        image: require('@/assets/img/p/p3.jpeg')
      }
    ]
  })
}
</script>

<style scoped>
.slider{
    border: 1px solid rgb(0, 255, 0);

  width: 75vw;
}

.vueperslide__title{
      border: 1px solid red;

}
p{
      border: 1px solid blue;

}
</style>