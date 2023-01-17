<template>
  <div class="carousel-item" :style="{ 'min-width': width + 'px' }">
    <img
      :src="require('../assets/img/p/' + item_data.img)"
      alt=""
      v-if="imageSlide"
    />
    <h4> {{ item_data.descr }}</h4>
    
    <!-- <div class="item_content" v-else> -->
      <!-- <slot /> -->
    </div>
  <!-- </div> -->
</template>

<script>
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CCarouselItem",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
    imageSlide: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped></style>
