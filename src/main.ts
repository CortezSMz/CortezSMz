import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

new Vue({
  data: {
    isMobile(): boolean {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
