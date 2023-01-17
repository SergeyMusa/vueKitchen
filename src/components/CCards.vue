<template>
  <div class="CCards">
    <h1>C-Cards</h1>

    <!-- FIXME: -->
    <!-- <div class="cards-item" :style="{ 'min-width': width + 'px' }"> -->
    <div class="card__list">
      <CCatalogItem
        v-for="kitchen in KITCHENS"
        :key="kitchen.article"
        v-bind:kitchen_data="kitchen"
        @sendArticle="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
import CCatalogItem from "@/components/CCatalogItem.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "CCards",
  components: {
    CCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'KITCHENS'
    ])
  },
  methods: {
    // sendArticle
    showChildArticleInConsole(data) {
      console.log(data);
    },
    ...mapActions(["GET_KITCHENS_FROM_API"]),
  },
  mounted() {
    this.GET_KITCHENS_FROM_API()
    .then((Response) => {
      if (Response.data) {
        console.log('Data_arrived!');
      }
    })
    ;
  },
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
.CCards {
  /* border: 1px solid rgb(155, 2, 243); */
}
.card__list {
  border: 1px solid rgb(8, 212, 239);
  /* max-width: 100px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
/* FIXME:  */
.cards-item {
  border: 1px solid blue;
  /* flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e8e8e8;
  padding: 16px;
  margin-bottom: 16px; */
}
div {
  display: block;
}
</style>
