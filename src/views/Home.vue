<template>
  <v-container>
    <v-row justify="center">
      <Intro />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
    <v-row justify="center">
      <Ipsum />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "@/components/home/Intro.vue";
import Ipsum from "@/components/home/Ipsum.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Intro,
    Ipsum,
  },
});
</script>
