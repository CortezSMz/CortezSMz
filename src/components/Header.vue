<template>
  <v-app-bar app flat color="transparent">
    <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Linkedin button -->
    <v-btn
      icon
      small
      target="_blank"
      href="https://www.linkedin.com/in/alexandre-cortez-43b400169/"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <title id="LinkedinIcoTitle">LinkedIn logo</title>
        <path
          d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
        />
      </svg>
    </v-btn>
    <!-- GitHub button -->
    <v-btn icon small target="_blank" href="https://github.com/CortezSMz">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
          clip-rule="evenodd"
        />
      </svg>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    routeName: String,
    viewport: Object,
  },
  methods: {
    openMenu() {
      document.body.classList.add("-open-nav");
    },
    closeMenu() {
      document.body.classList.remove("-open-nav");
    },
  },
});
</script>
