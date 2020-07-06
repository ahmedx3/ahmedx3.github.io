<template>
  <v-app>
      <topbar></topbar>
      <v-content>
          <intro></intro>
          <about></about>
          <my-work></my-work>
      </v-content>
  </v-app>
</template>

<script>
import Topbar from '../components/TopBar.vue';
import Intro from '../components/Intro.vue';
import About from '../components/About.vue';
import MyWork from '../components/MyWork.vue';

export default {
  components: {
    Topbar,
    Intro,
    About,
    MyWork,
  },
};
</script>
