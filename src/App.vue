<template>
  <v-app>
    <Background />
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import "@/styles/app.scss";

import Vue from "vue";
import Background from "./components/Background.vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Background,
  },
});
</script>
>
