<template>
  <div class="accordion-main">
    <!-- TODO: -->
    <h1>accordion</h1>

    <div :accordArr="accordArr">
        <div class="accordContainer">qwe
          <div
            class="accordTitle"
            @click="accordArr.active = !accordArr.active"
            v-for="(accordArr, index) in accordArr"
            :key="index"
          >asd
            <template>
              {{ accordArr.title }}
              <div class="accordContent" v-show="accordArr.active">
                {{ accordArr.details }}
              </div>
            </template>
          </div>
        </div>
    </div>

    <!-- <PageAccordionElements >
        {{accordArr.title}}
          {{accordArr.details}}
  </PageAccordionElements> -->
  </div>
</template>

<script>

export default {
  name: "PageAccordionElements",
  components: {
    // PageAccordionElements,
  },

  data: () => {
    return {
      isElVisible: false
    }
  },
  props: {
    accordArr: Array
  }
  // props:['accordArr'],

};
// }
</script>

<style scoped lang="scss"></style>
