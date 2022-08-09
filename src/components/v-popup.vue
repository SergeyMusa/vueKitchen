<template>
  <!-- TODO: -->
  <div class="popup_wraper" ref="popup_wraper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupName }}</span>
        <span>
          <i class="material-icons close-btn" @click="closePopup">
            arrow_circle_down
          </i>
          <!-- <i class="icon">close-box</i> -->
          <!-- <MenuIcon close-circle /> -->
          <!-- <MenuIcon1 close /> -->
          <MenuIcon3 />
        </span>
      </div>
      <div class="v-popup__content">
        <slot />
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button class="submit_btn" @click="rightBtnAction">{{ rightBtnTitle }}</button>
      </div>
    </div>
  </div>
</template>

<script>
// import MenuIcon1 from "vue-material-design-icons/Menu.vue";
// import "vue-material-design-icons/styles.css";
// import '~material-design-icons-iconfont/src/material-design-icons';
// import MenuIcon from '@mdi/font';
// import MenuIcon2 from 'vue-material-design-icons';
import MenuIcon3 from "material-design-icons-iconfont";
// import MenuIcon4 from 'material-design-icons';
// Vue.component('menu-icon', MenuIcon);

export default {
  name: "v-popup",
  components: {
    // MenuIcon,
    // MenuIcon1,
    // MenuIcon2,
    MenuIcon3,
  },
  props: {
    rightBtnTitle: {
      type: String,
      default: "OK",
    },
    popupName: {
      type: String,
      default: "TITLE",
    },
  },
  data() {
    return {};
  },
  //   computed: {},
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightBtnAction() {
        this.$emit("rightBtnAction");
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
        if (item.target === vm.$refs['popup_wraper']) {
            vm.closePopup();
        }
    })
  },
};
</script>

<style lang="scss">
// .material-design-icon.icon {
//   height: 2em;
//   width: 2em;
// }
// .material-design-icon.icon-2x {
//   height: 2em;
//   width: 2em;
// }
.popup_wraper{
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    // FIXME:
    // надо переделать, не корректно работает
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 74%;
  background: #fff;
  box-shadow: 0 0 17px 0 #7c7c7c;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.submit_btn,
.close_modal {
  padding: 8px;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
.submit_btn {
  background: rgb(16, 130, 138);
}
.close_modal {
  background: rgb(138, 16, 46);
}
.close-btn {
  color: black;
  &:hover {
    color: rgb(104, 1, 1);
    cursor: pointer;
  }
}
</style>
