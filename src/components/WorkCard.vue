<template>
      <v-card
        class="mx-auto"
        max-width="344"
        @mouseover="overlay=true" @mouseout="overlay=false"
      >
        <v-img src="../assets/presentationVR.png"></v-img>

        <v-card-text>
          <h2 class="title red--text" >Presentation Rehearsal VR</h2>
          The player has to rehearse in front of the audience in certain time.
           He is given a score based on his presentation skills.
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-show="overlay" absolute
          >
            <v-btn @click="dialog = true">Check It Out</v-btn>
            <v-dialog v-model="dialog"
            max-width="60%"
            overlay-color="black"
            overlay-opacity="0.9">
                <v-card>
                <v-container align-center justify-center fill-height>
                    <span class="display-1 font-weight-black my-6">Presentation Rehearsal VR</span>
                    <youtube video-id="c4PzLJEB3jY"></youtube>
                </v-container>
                <v-container>
                    <span class="title font-weight-regular my-6">
                        The experience should help the player to overcome the
                        fear of public speaking and rehearse in front of intractable audience.
                        The player will be asked to finish his slides in front of audience
                        at a certain time. There will be score based on his presentation skills.
                        Therefore, the player should feel uncomfortable and nervous.
                        It is HTC VIVE compatible.
                        The whole scene was completely made from scratch.</span>
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
