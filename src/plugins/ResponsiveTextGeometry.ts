/* eslint-disable @typescript-eslint/no-non-null-assertion */

import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import stripIndent from "strip-indent";

interface ResponsiveTextGeometryParameters {
  size?: number;
  height?: number;
  letterSpacing?: number;
  wordSpacing?: number;
  lineHeight?: number;
  curveSegments?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelOffset?: number;
  bevelSegments?: number;
}

const defaultTextGeometryOptions: ResponsiveTextGeometryParameters = {
  letterSpacing: 0.2,
  wordSpacing: 0.6,
  lineHeight: 1.5,
  size: 1,
  height: 0.1,
  // from here, defaults from https://threejs.org/docs/#examples/en/geometries/TextGeometry.parameters
  curveSegments: 12,
  bevelEnabled: false,
  bevelThickness: 10,
  bevelSize: 8,
  bevelOffset: 0,
  bevelSegments: 3,
};

export default class ResponsiveTextGeometry {
  private string: string;

  private font: Font | string;

  private camera: THREE.PerspectiveCamera;

  private options: ResponsiveTextGeometryParameters;

  public chars: THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial[]>[];

  public words: THREE.Group[];

  public lines: THREE.Group[];

  public scene: THREE.Scene;

  constructor(
    string: string,
    font: string,
    camera: THREE.PerspectiveCamera,
    options?: ResponsiveTextGeometryParameters
  ) {
    this.string = this.clearString(string);

    this.font = font;

    this.camera = camera;

    this.options = {
      ...defaultTextGeometryOptions,
      ...options,
    };

    this.scene = new THREE.Scene();
    this.scene.name = this.string;

    this.lines = [];

    this.words = [];

    this.chars = [];
  }

  private clearString(string: string): string {
    return stripIndent(string).split(/\n/g).join("\n");
  }

  private async loadFont(font: string): Promise<Font> {
    const loader = new FontLoader();

    return await loader.loadAsync(font);
  }

  private generateGeometry(): void {
    const lines = this.string.split(/\n/g);

    for (const line of lines) {
      const lineGroup = new THREE.Group();
      lineGroup.name = `line-${line}`;

      const words = line.split(/\s/g);

      for (const word of words) {
        const wordGroup = new THREE.Group();
        wordGroup.name = `word-${word}`;

        const chars = word.split("");

        for (const char of chars) {
          const mesh = this.createCharMeshGeometry(
            char,
            this.font as Font,
            this.options
          );

          mesh.name = `char-${char}`;

          this.chars.push(mesh);

          wordGroup.add(mesh);
        }

        lineGroup.add(wordGroup);

        this.words.push(wordGroup);
      }

      this.scene.add(lineGroup);

      this.lines.push(lineGroup);
    }
  }

  private createCharMeshGeometry(
    char: string,
    font: Font,
    options?: ResponsiveTextGeometryParameters
  ): THREE.Mesh<TextGeometry, THREE.MeshPhongMaterial[]> {
    const geometry = new TextGeometry(char, {
      font,
      ...options,
    });

    const mesh = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ color: 0xfafafa, flatShading: true }),
      new THREE.MeshPhongMaterial({ color: 0x747474 }),
    ]);

    mesh.name = char;

    mesh.castShadow = true;

    return mesh;
  }

  private getSize(mesh: THREE.Object3D | THREE.Object3D[]): {
    x: number;
    y: number;
    center: THREE.Vector3;
  } {
    if (Array.isArray(mesh)) {
      return {
        x: mesh.reduce((acc, cur) => acc + this.getSize(cur).x, 0),
        y: mesh.reduce((acc, cur) => Math.max(acc, this.getSize(cur).y), 0),
        center: new THREE.Vector3(),
      };
    }

    const boundingBox = new THREE.Box3().setFromObject(mesh);

    return {
      x: boundingBox.getSize(new THREE.Vector3()).x,
      y: boundingBox.getSize(new THREE.Vector3()).y,
      center: boundingBox.getCenter(new THREE.Vector3()),
    };
  }

  private getPixelSize(mesh: THREE.Object3D | THREE.Object3D[]) {
    const vFov = (this.camera.fov * Math.PI) / 180;
    const height =
      2 * Math.tan(vFov / 2) * Math.abs(this.scene.position.z) || Infinity;
    const width = height * this.camera.aspect;
    const pixelSize = window.innerWidth * ((1 / width) * this.getSize(mesh).x);

    return pixelSize;
  }

  public adjust(): void {
    for (const word of this.words) {
      let startingWordPosition = 0;
      for (const char of word.children) {
        char.position.x = startingWordPosition;
        startingWordPosition +=
          this.getSize(char).x + this.options.letterSpacing!;
      }
    }

    let startingLinePositionY = 0;

    for (const line of this.lines) {
      let startingLinePositionX = 0;

      let currLine: THREE.Object3D[] = [];

      for (const word of line.children) {
        word.position.set(startingLinePositionX, startingLinePositionY, 0);

        startingLinePositionX +=
          this.getSize(word).x + this.options.wordSpacing!;

        currLine.push(word);
        const currLinePixelWidth = this.getPixelSize(currLine);

        if (currLinePixelWidth * 2.5 > window.innerWidth) {
          startingLinePositionX = 0;
          startingLinePositionY -= this.options.lineHeight!;

          currLine = [];
        }
      }
      startingLinePositionY -= this.options.lineHeight!;
    }

    const tmpPosZ = this.scene.position.z;
    this.scene.position.sub(this.getSize(this.scene).center);
    this.scene.position.z = tmpPosZ;
  }

  public async init(): Promise<void> {
    if (typeof this.font !== "string") return;

    this.font = await this.loadFont(this.font);

    this.generateGeometry();

    this.adjust();

    window.addEventListener("resize", this.adjust.bind(this), false);
  }
}
