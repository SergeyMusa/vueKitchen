<template>
  <div class="c-card">
    <!-- строка
        rightBtnTitle="Add-Cart"  -->

    <!-- переменная
        :popupName=test -->
    <!--  \/  -->
    <slot>
      <cModal
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
        rightBtnTitle="Add-Cart"
        :popupName="test"
        @rightBtnAction="addToCart"
      >
        <!-- TODO: -->
        <div>
          <p>Props-text:_</p>
        </div>
        <div>
          {{ msg.toUpperCase() }}
        </div>
      </cModal>
    </slot>
    <button class="v-catalog-item__show-info" @click="showPopupInfo">
      Show info
    </button>

    <!-- <button class="v-catalog-add_tocart" @click="addToCart">
      Add To Cart
    </button> -->

    <hr />
  </div>
</template>

<script>
import cModal from "@/components/CModal.vue";

// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CModalElements",
  props: {
    msg: String,
  },
  data() {
    return {
      isInfoPopupVisible: false,
      test: "TEST",
    };
  },
  components: {
    cModal,
  },
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    addToCart() {
      //   this.isInfoPopupVisible = false;
      console.log("addToCart");
    },
  },
  computed: {},
};
</script>

<style scoped></style>
