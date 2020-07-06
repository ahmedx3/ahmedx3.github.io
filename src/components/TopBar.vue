<template>
  <v-app-bar
      color="#c70039"
      dark app="" hide-overlay
      >
      <v-toolbar-title class="font-weight-light ml-5">Ahmed</v-toolbar-title>
      <v-toolbar-title class="font-weight-bold">Mostafa</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined="" class="mx-3" @click="$vuetify.goTo('#myIntro', options)">Home</v-btn>
      <v-btn outlined="" class="mx-3" @click="$vuetify.goTo('#myAbout', options)">About</v-btn>
      <v-btn outlined="" class="mx-3" @click="$vuetify.goTo('#myWork', options)">My Work</v-btn>
      <v-btn outlined="" class="mx-3">Contact</v-btn>
    </v-app-bar>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns';

export default {
  data() {
    return {
      duration: 650,
      offset: 0,
      easing: 'easeInOutQuad',
      easings: Object.keys(easings),
    };
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
  },
};
</script>
