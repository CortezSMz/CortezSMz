<template>
  <v-container>
    <v-row align="center" justify="center">
      This website is a work in progress. Most of what you see here will
      probably change.
      <v-col cols="10">
        <Intro />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "@/components/home/Intro.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Intro,
  },
});
</script>
