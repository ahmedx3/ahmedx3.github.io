<template>
  <div id="myWork">
      <v-divider></v-divider>
      <v-container fill-height justify-center align-center>
        <h1 class="display-3 font-weight-black">My Work</h1>
      </v-container>
      <v-container fill-height justify-center align-center my-5>
          <h1 class="display-2 font-weight-black my-5">VR Experiences</h1>
          <v-row>
              <v-col lg="6" md="6" v-for="x in 5" :key="x">
                  <WorkCard></WorkCard>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import WorkCard from './WorkCard.vue';

export default {
  components: {
    WorkCard,
  },
};

</script>
<style scoped>
</style>
