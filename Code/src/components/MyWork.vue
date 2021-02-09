<template>
  <div id="myWork">
      <v-divider></v-divider>
      <v-container fill-height justify-center align-center>
        <h1 class="display-3 font-weight-black mt-5">My Work</h1>
      </v-container>
      <v-container fill-height justify-center align-center my-5>
          <h1 class="display-2 font-weight-black my-5">VR Experiences</h1>
          <v-row>
              <v-col lg="6" md="6" v-for="card in VrExp" :key="card.youtubeID">
                  <WorkCard :name="card.name"
                  :brief="card.brief"
                   :youtubeID="card.youtubeID" :image="card.image"
                   :description="card.description"></WorkCard>
              </v-col>
          </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-container fill-height justify-center align-center my-5>
          <h1 class="display-2 font-weight-black my-5">Jam Games</h1>
          <v-row>
              <v-col lg="6" md="6" v-for="card in JamGames" :key="card.youtubeID">
                  <WorkCard :name="card.name"
                  :brief="card.brief"
                   :youtubeID="card.youtubeID" :image="card.image"
                   :description="card.description"></WorkCard>
              </v-col>
          </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-container fill-height justify-center align-center my-5>
          <h1 class="display-2 font-weight-black my-5">WebGl Game</h1>
          <v-row>
                  <WorkCard :name="card.name" v-for="card in WebGLGame" :key="card.youtubeID"
                  :brief="card.brief"
                   :youtubeID="card.youtubeID" :image="card.image"
                   :description="card.description"></WorkCard>
          </v-row>
      </v-container>

      <v-divider></v-divider>

  </div>
</template>

<script>
import WorkCard from './WorkCard.vue';

export default {
  data() {
    return {
      VrExp: [
        {
          name: 'Presentation Rehearsal VR',
          brief: 'The player has to rehearse in front of the audience in certain time. He is given a score based on his presentation skills.',
          youtubeID: 'c4PzLJEB3jY',
          description: 'The experience should help the player to overcome the fear of public speaking and rehearse in front of intractable audience. The player will be asked to finish his slides in front of audience at a certain time. There will be score based on his presentation skills. Therefore, the player should feel uncomfortable and nervous. It is HTC VIVE compatible. The whole scene was completely made from scratch.',
          image: 'presentationVR.png',
        },
        {
          name: 'Hanitizer',
          brief: 'A room scale virtual realty experience made for African Hackathon 2020 that increase the awareness of the importance of covid precautionary measures through an interactive game.',
          youtubeID: '4obeP6v67yw',
          description: 'A room scale virtual realty experience made for African Hackathon 2020 that increase the awareness of the importance of covid precautionary measures through an interactive game.',
          image: 'Hanitizer.png',
        },
        {
          name: 'SpaceZombi',
          brief: 'A google cardboard game where the player shoot zombies at space using 2 different types of weapons.',
          youtubeID: 'uHDU6uR5hpA',
          description: 'The Player has 2 weapons. Each weapon has an ability. He shoots enemies in the space. Made in a day. It was developed for a google cardboard.',
          image: 'SpaceZombi.png',
        },
      ],
      JamGames: [
        {
          name: 'STUCK',
          brief: 'A game made in the global game jam ​​2020 where the player can rewind time and traverse in space to change the consequences of his actions.',
          youtubeID: 'g723FSlWfNc',
          description: 'Stuck is an OpenVR game in which a player can rewind time and traverse in space in order to change the consequences of his actions and fix fate in an endless psychedelic tunnel in which you will try to cheat time and death to get out of the loop and fix the events. I have worked on this game as part of 16 team members.',
          image: 'Stuck.jpg',
        },
        {
          name: 'What Home maze to you',
          brief: 'A game made in the global game jam ​​2019 where the player wonder in a maze to find what does his home really means to him.',
          youtubeID: 'BShojfIE68M',
          description: 'A game made in the global game jam ​​2019 where the player wonder in a maze to find what does his home really means to him.',
          image: 'WhatHome.png',
        },
      ],
      WebGLGame: [
        {
          name: 'RoboRush',
          brief: 'A WebGL endless runner game made for the computer graphics course where you play as BB8 from star-wars.',
          youtubeID: '8-ZhiLAAlRI',
          description: 'A game made with WebGL for computer graphics project where you play as BB8 the famous character from star-wars. The main purpose of making the game is to focus on the core principles of computer graphics concepts.',
          image: 'RoboRushPoster.jpg',
        },
      ],
    };
  },
  components: {
    WorkCard,
  },
};

</script>
<style scoped>
</style>
