<template>
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
  name: 'CompContact',
  components: {
    CompMap,
    CompContactRequisites,
  }
}
</script>

<style scoped>
.requisites {
  border: 1px solid rgb(11, 192, 183);

  width: 90vw;

  display: flex;
  flex-direction: row;
  justify-content: space-around ;
  align-items: center;
  margin: 0 50px;
}
</style>