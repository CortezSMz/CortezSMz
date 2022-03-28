<template>
  <section class="scene-intro" id="intro">
    <div class="static-container">
      <v-btn icon @click="title()">
        <v-icon>fa-play</v-icon>
      </v-btn>
      <div style="width: 300px">
        <Ufo />
      </div>
      <h1 ref="title">Alexandre Cortez</h1>

      <div>
        <p>
          Self-taught backend developer,<br />
          Enjoys coding Typescript, Node.js and Python.<br />
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Ufo from "@/assets/Ufo.vue";
import { suckText } from "@/plugins/animejs/Ufo";

export default Vue.extend({
  name: "Intro",

  components: {
    Ufo,
  },

  methods: {
    title(): void {
      suckText(this.$refs.title as Element);
    },
  },
});
</script>
