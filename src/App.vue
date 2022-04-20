<template>
  <v-app>
    <Header />
    <Scene />
  </v-app>
</template>

<script lang="ts">
import "@/styles/app.scss";

import { Component, Vue } from "vue-property-decorator";

import Header from "@/components/Header.vue";
import Scene from "@/components/Scene.vue";

@Component<App>({
  name: "App",

  components: {
    Header,
    Scene,
  },

  created() {
    window.addEventListener("beforeunload", () => window.scroll(0, 0));
  },
})
export default class App extends Vue {}
</script>
