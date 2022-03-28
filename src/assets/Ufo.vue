<template>
  <!-- <?xml version="1.0" encoding="utf-8"?> -->
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg
    ref="ufo"
    version="1.1"
    id="ufo"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="-255 297 100 200"
    style="enable-background: new -255 297 100 200"
    xml:space="preserve"
  >
    <g id="ship">
      <g id="beam">
        <path id="light" d="M-204.1,314.6l-50,179.1h100L-204.1,314.6z" />

        <line id="suckLine" x1="-205" y1="489" x2="-205" y2="312.1" />
      </g>
      <g id="fuselage">
        <g id="feets"></g>
        <path
          id="inner"
          d="M-209.9,318.3c3.3-2,8.6-2,11.8,0c3.3,2,3.3,5.3,0,7.3s-8.6,2-11.8,0
			C-213.3,323.5-213.3,320.3-209.9,318.3z"
        />
        <path
          id="outer"
          d="M-211.4,314.8c4-2.4,10.5-2.4,14.6,0c4,2.4,4,6.3,0,8.6c-4,2.4-10.5,2.4-14.6,0
			C-215.4,320.9-215.4,317-211.4,314.8z"
        />
        <path
          id="pit"
          d="M-204.1,309.6c3.6,0,6.4,2.9,6.4,6.4s-2.9,5.2-6.4,5.2s-6.4-1.6-6.4-5.2S-207.7,309.6-204.1,309.6z"
        />
      </g>
    </g>
    <g id="et">
      <path
        id="body"
        d="M-200.4,320.5c0.1-0.4,0.2-0.8,0.2-1.2v-3.2c0-2.1-1.7-3.9-3.9-3.9c-2.1,0-3.9,1.7-3.9,3.9v3.2
		c0,0.4,0.1,0.8,0.2,1.2c1,0.5,2.3,0.7,3.7,0.7C-202.7,321.3-201.4,321-200.4,320.5z"
      />
      <g id="eye">
        <path
          id="iris"
          d="M-204.1,314.9c1.1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9
			S-205.2,314.9-204.1,314.9z"
        />
        <path
          id="pupil"
          d="M-204.1,316.1c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6
			S-204.4,316.1-204.1,316.1z"
        />
      </g>
    </g>
    <linearGradient
      id="beam_1_"
      gradientUnits="userSpaceOnUse"
      x1="-1011.8405"
      y1="1.6647"
      x2="-1011.8405"
      y2="2.6647"
      gradientTransform="matrix(100 0 0 179.1 100980 16.5014)"
    >
      <stop offset="0" style="stop-color: #00ffff; stop-opacity: 0.75" />
      <stop offset="1" style="stop-color: #00ffff; stop-opacity: 0" />
    </linearGradient>
  </svg>
</template>

<style scoped>
#light {
  fill: url(#beam_1_);
}
#pupil,
#outer,
#feets {
  fill: #324d5b;
}
#inner {
  fill: #f4b459;
}
#pit {
  fill: #e4e7e7;
}
#et {
  fill: #3db39e;
}
#iris {
  fill: #ffffff;
}
</style>

<script lang="ts">
import { animateUfo } from "@/plugins/animejs/Ufo";
import Vue from "vue";

export default Vue.extend({
  name: "Ufo",

  mounted() {
    animateUfo(this.$refs.ufo as Element);
  },
});
</script>
