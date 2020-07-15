import Vue from "vue";
import Demo from "./demo.vue";
import IconSvg from './svg';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");

Vue.component('icon-svg',IconSvg)