<template>
      <v-container fill-height justify-center align-center>
        <v-btn :color="color" class="myButtons" outlined
         centered fab x-large dark @click="gotolink(url)">
            <v-icon>{{icon}}</v-icon>
        </v-btn>
        <p class="text-lg-center title font-weight-light">{{name}}</p>
    </v-container>
</template>

<script>
export default {
  props: {
    name: String,
    url: String,
    icon: String,
    color: String,
  },
  methods: {
    gotolink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style>
.myButtons{
    width: 120px !important;
    height: 120px !important;
}
</style>
