<template>
  <div id="intro" />
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
        `Alexandre Cortez\nSelf-taught developer.\nThis website is a work in progress.`,
        {
          font,
          size: 1,
          height: 0.1,
        }
      );

      geometry.center();

      this.textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ color: 0xfafafa, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x000000 }),
      ]);

      this.textMesh.castShadow = true;

      this.$parent.$parent.scene.add(this.textMesh);

      this.adjust();

      this.animate();
    });

    window.addEventListener("resize", this.adjust);
  }

  private animate() {
    gsap.from(this.textMesh.position, {
      z: -2000,
      duration: 0.5,
    });
  }

  private adjust() {
    this.textMesh.position.z = -25 * (window.innerHeight / window.innerWidth);
  }
}
</script>
