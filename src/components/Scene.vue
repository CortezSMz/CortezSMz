<template>
  <div>
    <Stars />

    <div ref="scene" id="scene" />

    <router-view />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "@/styles/app.scss";

import { Component, Vue } from "vue-property-decorator";

import * as THREE from "three";

import gsap from "gsap";

import { GUI } from "dat.gui";

import Raycaster from "@/plugins/Raycaster";

import Stars from "@/components/Stars.vue";

@Component<Scene>({
  name: "Scene",

  components: {
    Stars,
  },

  created() {
    window.addEventListener("beforeunload", () => window.scroll(0, 0));
  },

  mounted() {
    this.init();

    if (process.env.NODE_ENV === "development") this.setupControls();
  },

  beforeDestroy() {
    (this.$refs.scene as Element).removeChild(this.renderer.domElement);

    this.gui?.destroy();
  },
})
export default class Scene extends Vue {
  public scene!: THREE.Scene;

  public animations: ((() => void) | string)[][] = [];

  private camera!: THREE.PerspectiveCamera;

  private mouseOutTimeout!: number;

  private renderer!: THREE.WebGLRenderer;

  public raycaster!: Raycaster;

  private gui!: GUI;

  private init(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    this.camera.position.z = 1;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    this.raycaster = new Raycaster(this.camera, this.renderer.domElement);

    this.renderer.autoClearColor = false;

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    (this.$refs.scene as Element).appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize, false);

    window.addEventListener("mousemove", this.onMouseMove);

    window.addEventListener("mouseout", this.onMouseOut);

    this.scene.add(ambientLight);

    requestAnimationFrame(this.animate);

    this.animate();
  }

  private animate(): void {
    this.gui?.updateDisplay();

    for (const [, animation] of this.animations) {
      if (typeof animation !== "string") animation();
    }

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  private setupControls(): void {
    if (!this.gui) this.gui = new GUI();
    const cameraFolder = this.gui.addFolder("Camera");
    cameraFolder.open();
    const cameraPositionFolder = cameraFolder.addFolder("Position");
    cameraPositionFolder.add(this.camera.position, "x", -1000, 1000);
    cameraPositionFolder.add(this.camera.position, "y", -1000, 1000);
    cameraPositionFolder.add(this.camera.position, "z", -1000, 1000);
    cameraPositionFolder.open();
    const cameraRotationFolder = cameraFolder.addFolder("Rotation");
    cameraRotationFolder.add(this.camera.rotation, "x", -1000, 1000);
    cameraRotationFolder.add(this.camera.rotation, "y", -1000, 1000);
    cameraRotationFolder.add(this.camera.rotation, "z", -1000, 1000);
    cameraRotationFolder.open();
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private onMouseMove(evt: MouseEvent) {
    gsap.to(this.camera.rotation, {
      x: (-(evt.clientY / window.innerHeight) * 2 + 1) / 5,
      y: -((evt.clientX / window.innerWidth) * 2 - 1) / 5,
      ease: "circ",
    });
  }

  private onMouseOut() {
    clearTimeout(this.mouseOutTimeout);

    this.mouseOutTimeout = setTimeout(() => {
      gsap.to(this.camera.rotation, {
        x: 0,
        y: 0,
        ease: "circ",
      });
    }, 500);
  }
}
</script>
