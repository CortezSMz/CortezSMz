<template>
  <v-col ref="main" cols="10">
    <div ref="text">
      <h1>Lorem Ipsum</h1>
      <h2>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..."
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate,
        risus eget convallis consectetur, risus est dictum urna, quis volutpat
        erat justo vitae arcu. Nunc eget mauris nec risus fermentum imperdiet at
        sit amet tellus. Maecenas congue ac tellus non accumsan. Aenean id quam
        non felis gravida tincidunt. Cras in enim urna. Vestibulum tempor,
        turpis vel scelerisque vulputate, ante massa posuere ipsum, sed pulvinar
        sapien mi et diam. Donec vitae mauris mauris. Morbi ex nibh, convallis
        eget nibh vitae, scelerisque hendrerit sapien. Ut congue sit amet leo
        quis eleifend.
      </p>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import { startScene } from "@/assets/scenes/Ipsum";

export default Vue.extend({
  name: "Skills",

  mounted() {
    startScene.bind(this)();
  },
});
</script>
