<template>
  <div class="c-card">
    
        <!-- строка
        rightBtnTitle="Add-Cart"  -->

        <!-- переменная
        :popupName=test -->
         <!--  \/  -->
    <vPopup 
        v-if="isInfoPopupVisible" 
        @closePopup="closeInfoPopup"
        rightBtnTitle="Add-Cart" 
        :popupName=test

        @rightBtnAction="addToCart"
    >
    <!-- TODO: -->    
        <div>
            <p>Props-text:_ </p>
        </div>
        <div>
            {{ msg.toUpperCase() }}
        </div>
        
    </vPopup>

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
import vPopup from "@/components/v-popup.vue";

// import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "CCard",
  props: {
    msg: String
  },
  data() {
    return {
      isInfoPopupVisible: false,
      test: "TEST",
    };
  },
  components: {
    vPopup,
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
    console.log('addToCart');
    },
  },
  computed: {},
};
</script>

<style scoped></style>
