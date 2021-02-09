<template>
  <v-card height="100%">
      <v-img
        :src = images
        height="100%"
        @mouseover="overlay=true" @mouseout="overlay=false" @click="test()"
      >
        <v-overlay v-show="overlay" absolute >
          <v-btn large="" :to="myRoute">{{name}}</v-btn>
        </v-overlay>
      </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    };
  },
  props: {
    images: String,
    name: String,
    myRoute: String,
  },
  methods: {
    test() {
      // eslint-disable-next-line no-console
      console.log('test');
    },
  },
};
</script>
