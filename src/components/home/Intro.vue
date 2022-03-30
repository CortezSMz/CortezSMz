<template>
  <v-col cols="10">
    <Ufo ref="ufo" style="position: relative; float: right; height: 500px" />
    <h1 ref="nome" @click="nomeToUfo">Alexandre Cortez</h1>

    <p ref="texto1" @click="text1ToUfo">
      Self-taught developer that enjoys writing text files on free time.
    </p>
    <p ref="texto2" @click="text2ToUfo">
      This website is a work in progress. Most of what you see here will
      probably change.
    </p>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import Ufo from "@/assets/Ufo.vue";
import { toUfo } from "@/assets/animations/Ufo";

export default Vue.extend({
  name: "Intro",

  components: {
    Ufo,
  },

  methods: {
    nomeToUfo() {
      toUfo((this.$refs.ufo as Vue).$el as Element, this.$refs.nome as Element);
    },
    text1ToUfo(): void {
      toUfo(
        (this.$refs.ufo as Vue).$el as Element,
        this.$refs.texto1 as Element
      );
    },
    text2ToUfo(): void {
      toUfo(
        (this.$refs.ufo as Vue).$el as Element,
        this.$refs.texto2 as Element
      );
    },
  },
});
</script>
