<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import "@/styles/app.scss";

import Vue from "vue";
import Header from "./components/Header.vue";
export default Vue.extend({
  components: { Header },
  name: "App",
});
</script>
>
