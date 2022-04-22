<template>
  <div id="stars" />
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Component, Vue } from "vue-property-decorator";

import Scene from "@/components/Scene.vue";

import * as THREE from "three";

@Component<Stars>({
  name: "Stars",

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },

  beforeDestroy() {
    this.$parent.animations = this.$parent.animations.filter(
      (animation) => animation[0] !== this.$options.name
    );

    this.$parent.scene.remove(this.starPoints);
  },
})
export default class Stars extends Vue {
  public $parent!: Scene;
  private particles = 200;
  private dim = 250;
  private speed = 20;
  private vertices: number[] = [];
  private starGeo!: THREE.BufferGeometry;
  private starSpreadX = 0.5;
  private starSpreadY = 0.5;
  private starSpreadZ = 0.5;
  private starPoints!: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;

  private init(): void {
    for (let i = 0; i < this.particles; i++) {
      const x = this.dim * this.starSpreadX * (Math.random() - 0.5);
      const y = this.dim * this.starSpreadY * (Math.random() - 0.5);
      const z = -this.dim * this.starSpreadZ * Math.random();
      this.vertices.push(x, y, z);
    }

    this.starGeo = new THREE.BufferGeometry();

    this.starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.vertices, 3)
    );

    const starMat = new THREE.PointsMaterial({
      color: 0xfafafa,
      size: 0.2,
      transparent: true,
      depthTest: false,
    });

    this.starPoints = new THREE.Points(this.starGeo, starMat);

    this.$parent.scene.add(this.starPoints);

    this.$parent.animations.push([this.$options.name!, this.animation]);
  }

  private animation() {
    this.starGeo.attributes.position.needsUpdate = true;
    let p = this.starGeo.attributes.position.array as Float32Array;
    for (let i = 0; i < p.length; i += 3) {
      const z = p[i + 2];
      if (z >= 0) {
        p[i] = this.dim * this.starSpreadX * (Math.random() - 0.5);
        p[i + 1] = this.dim * this.starSpreadY * (Math.random() - 0.5);
        p[i + 2] = -this.dim * this.starSpreadZ;
      } else {
        p[i + 2] += -this.speed / p[i + 2];
      }
    }
  }
}
</script>
>
