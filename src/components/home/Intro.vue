<template>
  <v-col ref="main" cols="10">
    <Ufo ref="ufo" />
    <div ref="text" class="content">
      <h1>Alexandre Cortez</h1>

      <p>Self-taught developer that enjoys writing text files on free time.</p>
      <p>
        This website is a work in progress. Most of what you see here will
        probably change.
      </p>
    </div>
  </v-col>
</template>

<script lang="ts">
import "@/styles/intro.scss";

import Vue from "vue";
import Ufo from "@/assets/Ufo.vue";
import { startScene } from "@/assets/scenes/Intro";

export default Vue.extend({
  name: "Intro",

  components: {
    Ufo,
  },
  mounted() {
    startScene.bind(this)();
  },
});
</script>
