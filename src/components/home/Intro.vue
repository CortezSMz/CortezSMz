<template>
  <div id="intro" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as THREE from "three";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

import ResponsiveTextGeometry from "@/plugins/ResponsiveTextGeometry";

import Home from "@/views/Home.vue";

@Component<Intro>({
  name: "Intro",

  async mounted() {
    this.$nextTick(async () => {
      await this.init();
    });
  },

  beforeDestroy() {
    this.$parent.$parent.scene.remove(this.scene);
  },
})
export default class Intro extends Vue {
  public $parent!: Home;

  private scene!: THREE.Scene;

  private async init() {
    const text = new ResponsiveTextGeometry(
      `
      Alexandre Cortez

      Self-taught developer.
      This website is a work in progress.
      `,
      "assets/Space_Mono_Regular.json",
      this.$parent.$parent.camera
    );

    text.scene.position.z = -20;

    await text.init();

    this.scene = text.scene;

    this.$parent.$parent.scene.add(text.scene);

    for (const char of text.chars)
      this.$parent.$parent.raycaster.on("pointermove", char, () => {
        const r = gsap.utils.random(0, 1);
        const g = gsap.utils.random(0, 1);
        const b = gsap.utils.random(0, 1);
        gsap
          .timeline()
          .to(char.material[0].color, {
            r,
            g,
            b,
            duration: 0.5,
          })
          .to(char.material[1].color, {
            r: r / 2,
            g: g / 2,
            b: b / 2,
            duration: 1,
          });
      });

    gsap.from(
      text.chars.map((c) => c.position),
      {
        z: -2000,
        duration: 2,
        stagger: {
          each: 0.2,
          from: "random",
        },
      }
    );
  }
}
</script>
