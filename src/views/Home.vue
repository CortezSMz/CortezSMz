<template>
  <div id="home">
    <Intro />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Intro from "@/components/home/Intro.vue";
import Scene from "@/components/Scene.vue";

@Component<Home>({
  name: "Home",

  components: {
    Intro,
  },
})
export default class Home extends Vue {
  $parent!: Scene;
}
</script>
