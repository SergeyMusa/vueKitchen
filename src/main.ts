import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import router from "./router";
import BaseBtn from "@/components/base/BaseBtn.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import store from "./vuex/store";
// $material-design-icons-font-directory-path: '~material-design-icons-iconfont/dist/fonts/';
// import '~material-design-icons-iconfont/src/material-design-icons';

Vue.config.productionTip = false;

// Vue.use(VueAwesomeSwiper);
const requireComponent = require.context(
  "./components/base/",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const last = fileName.split("/").pop();
  if (last == undefined) throw Error("This has never happened before.");

  // Compiler now will 'know' that last is a string.
  const componentName = upperFirst(camelCase(last.replace(/\.\w+$/, "")));

  // const componentName = upperFirst(camelCase(fileName.split('/').pop()!.replace(/\.\w+$/, '') ) )
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  render: (h) => h(App),
  store
}).$mount("#app");
