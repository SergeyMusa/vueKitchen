<template>
 <!-- FIXME: переделать позиционирование на флексы-->
  <div class="requisites">
    <div class="requisites__info">
      <CompContactRequisites />
    </div>
    <div class="requisites__map">
      <CompMap />
    </div>
  </div>
</template>

<script>
import CompMap from "@/components/CompMap.vue";
import CompContactRequisites from "@/components/CompContactRequisites.vue";

export default {
  name: "CompContact",
  components: {
    CompMap,
    CompContactRequisites,
  },
};
</script>

<style scoped>
.requisites {
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px;
}
/* .requisites__info{
display: flex;
  flex-direction: column;
} */
</style>
