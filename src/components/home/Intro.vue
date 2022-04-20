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

    this.$parent.$parent.raycaster.off(
      "pointermove",
      this.textMesh,
      this.changeColor
    );
  },
})
export default class Intro extends Vue {
  public $parent!: Home;

  private textMesh!: THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial[]>;

  private init() {
    const loader = new FontLoader();

    loader.load("assets/Space_Mono_Regular.json", (font) => {
      const geometry = new TextGeometry(
        `Alexandre Cortez\nSelf-taught developer.\nThis website is a work in progress.`,
        {
          font,
          size: 1,
          height: 0.2,
        }
      );

      geometry.center();

      this.textMesh = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ color: 0xfafafa, flatShading: true }),
        new THREE.MeshPhongMaterial({ color: 0x747474 }),
      ]);

      this.textMesh.castShadow = true;

      this.$parent.$parent.scene.add(this.textMesh);

      this.$parent.$parent.raycaster.on(
        "pointermove",
        this.textMesh,
        this.changeColor
      );

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

  private changeColor() {
    const r = gsap.utils.random(0, 1);
    const g = gsap.utils.random(0, 1);
    const b = gsap.utils.random(0, 1);

    gsap
      .timeline()
      .to(this.textMesh.material[0].color, {
        r,
        g,
        b,
        duration: 0.5,
      })
      .to(this.textMesh.material[1].color, {
        r: r / 2,
        g: g / 2,
        b: b / 2,
        duration: 1,
      });
  }
}
</script>
