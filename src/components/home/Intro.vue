<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import gsap from "gsap";
import Home from "@/views/Home.vue";

@Component<Intro>({
  name: "Intro",

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.$parent.$parent.scene.remove(this.textMesh);
  },
})
export default class Intro extends Vue {
  $parent!: Home;

  private textMesh!: THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial[]>;

  private init() {
    const loader = new FontLoader();

    loader.load("assets/Space_Mono_Regular.json", (font) => {
      const geometry = new TextGeometry(
        `Alexandre Cortez\nSelf-taught developer that enjoys writing text files on free time.\nThis website is a work in progress. Most of what you see here will probably change.`,
        {
          font,
          size: 4,
          height: 0.2,
        }
      );

      geometry.center();

      this.textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ color: 0xfafafa, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x000000 }),
      ]);

      this.textMesh.castShadow = true;

      this.textMesh.position.z = -120;

      this.$parent.$parent.scene.add(this.textMesh);

      this.animate();
    });
  }

  private animate() {
    gsap.from(this.textMesh.position, {
      z: -2000,
      duration: 0.5,
    });
  }
}
</script>
