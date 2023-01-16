<template>
  <div class="CCards">
    <h1>C-Cards</h1>

    <!-- FIXME: -->
    <!-- <div class="cards-item" :style="{ 'min-width': width + 'px' }"> -->
    <div class="card__list">
      <CCatalogItem
        v-for="kitchen in kitchens"
        :key="kitchen.article"
        v-bind:kitchen_data="kitchen"
        @sendArticle="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
import CCatalogItem from "@/components/CCatalogItem.vue";

export default {
  name: "CCards",
  components: {
    CCatalogItem,
  },
  props: {},
  data() {
    return {
      kitchens: [
        {
          image: "1.jpg",
          name: "T-shirt 1",
          price: 2100.234234234,
          article: "T1",
          available: true,
          category: "Классика",
        },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 3150.12312412,
          article: "T2",
          available: true,
          category: "Классика",
        },
        {
          image: "3.jpg",
          name: "T-shirt 3",
          price: 4200.51524,
          article: "T3",
          available: false,
          category: "Модерн",
        },
        {
          image: "4.jpg",
          name: "T-shirt 4",
          price: 5300.1245512,
          article: "T4",
          available: true,
          category: "Ретро",
        },
        {
          image: "5.jpg",
          name: "T-shirt 5",
          price: 6500.3522314,
          article: "T5",
          available: false,
          category: "Классика",
        },
        {
          image: "6.jpg",
          name: "T-shirt 6",
          price: 8700.4124123,
          article: "T6",
          available: true,
          category: "Модерн",
        },
      ],
    };
  },
  computed: {},
  methods: {
    // sendArticle
    showChildArticleInConsole(data) {
      console.log(data)
    }
  }
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
  border: 1px solid rgb(155, 2, 243);
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
