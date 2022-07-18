<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
name: "CompAccordionAlfa",
  props: {},
  data() {
    return {
      CompAccordionAlfa: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { CompAccordionAlfa: this.CompAccordionAlfa };
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
