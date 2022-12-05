<template>
  <div class="CCards">
    C-Cards
    <!-- FIXME: -->
    <!-- <div class="cards-item" :style="{ 'min-width': width + 'px' }"> -->
      <div class="cards-item" :style="{ 'min-width': 400 + 'px' }">
      <!-- :src="require('../assets/img/1/' + item_data.img)" -->
      <!-- <img src="../assets/img/1/1.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CCards",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
/* <!-- TODO: --> */
@media only screen and (max-width: 576px) {
  .post__item {
    flex-direction: column;
  }
  
  .post__image {
    flex: 0 auto;
    height: auto;
  }
} 

</style>
