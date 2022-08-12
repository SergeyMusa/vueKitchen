<template>
  <div class="slider">
    <!-- FIXME: -->
    <hr />

    <vueper-slides
      :slide-ratio="0.2"
      :infinite="false"
      disable-arrows-on-edges
      bullets-outside
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
        :style="'background-color: ' + ['red'][i % 2]" height='30vh'
      />
      <!-- :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" /> -->
    </vueper-slides>

    <hr />

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "PageSlider",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        title: "Кухня 23 из дуба",
        content: "Стоит 200 тыс.руб.",
        // You can also provide a URL for the image.
        image: require("@/assets/img/p/p1.jpeg"),
      },
      {
        title: "Кухня 2233 из дуdsfdsfdsf",
        content: "Slide 2 content.",
        image: require("@/assets/img/p/p2.jpeg"),
      },
      {
        title: "Кухня 111 из дdfdsfsdffdsf",
        content: "Slide 3 content.",
        image: require("@/assets/img/p/p3.jpeg"),
      },
    ],
  }),
};
</script>

<style scoped>
.slider {
  border: 1px solid rgb(0, 255, 0);
  width: 80vw;
  height: 31vh;
}
.vueperslides__parallax-wrapper{
  padding-bottom: 40%;
}
/* .vueperslides__title {
  border: 1px solid red;
} */
p {
  border: 1px solid blue;
}
</style>
