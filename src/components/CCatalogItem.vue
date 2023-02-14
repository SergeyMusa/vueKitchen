<template>
  <div class="CCatalogItem">
    <!-- v-bind:src=" require('../assets/img/1/' + kitchen_data.image)" -->
    <!-- v-bind:src=" require('../assets/img/how/' + kitchen_data.image)" -->
    <img
      class="CCatalogItem__image"
      v-bind:src="require('../assets/img/1/' + kitchen_data.image)"
      :alt="'img_' + kitchen_data.name"
    />
    <p class="CCatalogItem__name">{{ kitchen_data.name }}</p>
    <p class="CCatalogItem__price">{{ kitchen_data.price }} ₽</p>
    <!-- ₽ + &#8381 + \u20bd + &#x20bd + U+20BD (Unicode hex) -->
    <!-- <button class="CCatalogItem__btn btn" @click="sendDataToCCards"> -->
    <button class="CCatalogItem__btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CCatalogItem",
  props: {
    kitchen_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    // sendDataToCCards() {
    //   this.$emit("sendArticle", this.kitchen_data.article);
    // },
    addToCart () {
      this.$emit('addToCart',this.kitchen_data)
    }
  },
};
</script>

<style scoped lang="scss">
.CCatalogItem {
  border: 1px solid rgb(0, 255, 30);
  /* max-height: 200px;
   width: 200px; */
  flex-basis: 25%;

  box-shadow: 0 0 8px 0 #e8e8e8;
  /* padding: $padding * 2; */
  padding: 16px * 2;
  margin-bottom: 16px * 2;
  &__image {
    width: 150px;
  }
}
</style>
