<template>
  <div>
    <h2>Наши профессионалы за работой</h2>
    <div class="slider">
      <!-- FIXME: кнопки и листание-->
      <!-- <hr /> -->

      <div class="wrapper">
        <div>
          <i
            class="material-icons leftButton"
            @click="prevSlide"
            alt="leftButton"
            type="image"
            size="50px"
            >arrow_back_ios</i
          >
          <!-- <button class="leftButton" @click="prevSlide" alt="leftButton"></button> -->
        </div>
        <div
          class="carousel"
          :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
        >
          <CCarouselItem
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
            :imagesSlide="true"
            :width="slideWidth"
          >
            <p>item.id_{{ item.id }}</p>
            <p>{{ item.name }}</p>
          </CCarouselItem>
        </div>
        <div>
          <!-- arrow_circle_right -->
          <i
            class="material-icons rightButton"
            @click="nextSlide"
            alt="rightButton"
            type="image"
            >arrow_forward_ios</i
          >
          <!-- <button class="rightButton" @click="nextSlide" >Next</button> -->
        </div>
      </div>

      <!-- <hr /> -->
    </div>
  </div>
</template>

<script>
import CCarouselItem from "@/components/CCarouselItem.vue";

export default {
  name: "CCarousel",
  components: {
    CCarouselItem,
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
    slideWidth: {
      type: Number,
      default: 300,
    },
  },

  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style scoped>
.slider {
  /* border: 1px solid rgb(0, 255, 0); */
  /* width: 80vw; */
  /* height: 31vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  z-index: 5;
}
.wrapper {
  /* border: 1px solid red; */
  max-width: 300px;
  /* width: 300px; */
  overflow: hidden;
  /* margin: 0 auto; */
  position: relative;
}
.carousel {
  /* border: 1px solid orange; */
  display: flex;
  /* justify-content: flex-start; */
  transition: all ease 0.7s;
  z-index: 10;
}
.leftButton {
  /* border: 1px solid blue; */
  z-index: 11;
  position: absolute;
  top: 70px;
  left: -1px;
  /* background-image: url("chevron-circle-left"); */
  color: black;

  /* height: 50px; */
  /* width: 30px; */

  /* background-size: cover;
background-position:center;
background-repeat : no-repeat; */
  cursor: pointer;
}
.rightButton {
  /* border: 1px solid blueviolet; */
  /* color: #2779bd; */
  color: black;

  z-index: 12;
  /* margin-left: 110px; */
  /* padding-left: 110px; */
  position: absolute;
  top: 70px;
  right: -5px;
  /* right: 23vw; */
  cursor: pointer;
}
</style>
