<template>
  <div></div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Vue from "vue";

import * as THREE from "three";

export default Vue.extend({
  name: "Background",

  data(): {
    particles: number;
    speed: number;
    dim: number;
    vertices: number[];
    scene: null | THREE.Scene;
    camera: null | THREE.PerspectiveCamera;
    renderer: null | THREE.WebGLRenderer;
    starGeo: null | THREE.BufferGeometry;
    scrollY: number;
  } {
    return {
      particles: 500,
      speed: 20,
      dim: 250,
      vertices: [0, 0, 0],
      scene: null,
      camera: null,
      renderer: null,
      starGeo: null,
      scrollY: 0,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(this.renderer.domElement);

      window.addEventListener("resize", this.onWindowResize, false);

      window.addEventListener("scroll", this.onWindowScroll);

      this.renderer.autoClearColor = false; // For trails

      for (let i = 0; i < this.particles; i++) {
        const x = this.dim * 8 * (Math.random() - 0.5);
        const y = this.dim * 2 * (Math.random() - 0.5);
        const z = -this.dim * Math.random();

        this.vertices.push(x, y, z);
      }

      this.starGeo = new THREE.BufferGeometry();
      this.starGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(this.vertices, 3)
      );
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true, // For trails
        depthTest: false, // For trails
      });

      const starPoints = new THREE.Points(this.starGeo, starMat);

      // The whole fade plate is for trails
      const fadeGeo = new THREE.PlaneBufferGeometry(1, 1);
      const fadeMat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.4,
      });
      const fadePlate = new THREE.Mesh(fadeGeo, fadeMat);
      (fadePlate.material as unknown as { renderOrder: number }).renderOrder =
        -1; // Important!
      fadePlate.position.z = -0.1;

      this.scene.add(fadePlate);
      this.scene.add(starPoints);
      requestAnimationFrame(this.animate);

      this.animate();
    },

    animate() {
      this.starGeo!.attributes.position.needsUpdate = true;
      let p = this.starGeo!.attributes.position.array as Float32Array;
      for (let i = 0; i < p.length; i += 3) {
        const z = p[i + 2];
        if (z >= 0) {
          p[i] = this.dim * 8 * (Math.random() - 0.5);
          p[i + 1] = this.dim * 2 * (Math.random() - 0.5);
          p[i + 2] = -this.dim;
        } else {
          p[i + 2] += -this.speed / p[i + 2];
        }
      }

      this.renderer!.render(this.scene!, this.camera!);
      requestAnimationFrame(this.animate!);
    },

    onWindowResize() {
      this.camera!.aspect = window.innerWidth / window.innerHeight;
      this.camera!.updateProjectionMatrix();
      this.renderer!.setSize(window.innerWidth, window.innerHeight);
    },

    onWindowScroll() {
      if (window.scrollY > this.scrollY) {
        this.speed += 1000;
      }

      setTimeout(() => {
        this.speed = 20;
      });

      this.scrollY = window.scrollY;
    },
  },
});
</script>
