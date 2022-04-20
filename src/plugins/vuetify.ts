import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#fafafa",
        secondary: "#0a0a0a",
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
