<template>
      <v-card
        class="mx-auto"
        max-width="344"
        @mouseover="overlay=true" @mouseout="overlay=false"
      >
        <v-img :src="require('@/assets/' + image + '')"></v-img>

        <v-card-text>
          <h2 class="title red--text" >{{name}}</h2>
          {{brief}}
        </v-card-text>

        <v-fade-transition>
          <v-overlay :z-index="1"
            v-show="overlay" absolute
          >
            <v-btn @click="dialog = true">Check It Out</v-btn>
            <v-dialog v-model="dialog"
            max-width="60%"
            overlay-color="black"
            overlay-opacity="0.9">
                <v-card>
                <v-container align-center justify-center fill-height>
                    <span class="display-1 font-weight-black my-6">{{name}}</span>
                </v-container>
                <v-container align-center justify-center fill-height>
                    <youtube :video-id="youtubeID"></youtube>
                </v-container>
                <v-container>
                    <span class="title font-weight-regular my-6">
                        {{description}}</span>
                </v-container>
                <v-card-actions> </v-card-actions>
                </v-card>
            </v-dialog>
          </v-overlay>
        </v-fade-transition>
      </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    brief: String,
    youtubeID: String,
    description: String,
    image: String,
  },
  data() {
    return {
      overlay: false,
      dialog: false,
    };
  },
};
</script>

<style>

</style>
