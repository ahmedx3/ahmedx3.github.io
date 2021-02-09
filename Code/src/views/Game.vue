<template>
  <v-app>
      <topbar></topbar>
      <v-content>
          <intro></intro>
          <about></about>
          <my-work></my-work>
          <contact></contact>
          <v-footer dark class="trans-bar" app dense>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>
      </v-content>
  </v-app>
</template>

<script>
import Topbar from '../components/TopBar.vue';
import Intro from '../components/Intro.vue';
import About from '../components/About.vue';
import MyWork from '../components/MyWork.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Topbar,
    Intro,
    About,
    MyWork,
    Contact,
  },
};
</script>

<style scoped>
</style>
