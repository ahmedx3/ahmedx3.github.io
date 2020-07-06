<template>
  <div id="myContact">
      <v-container fill-height justify-center align-center>
          <h1 class="display-3 font-weight-black">Contact Me</h1>
          <v-row>
              <v-col cols="12" xs="12" sm="6" md="3" lg="2" v-for="x in contacts" :key="x.url">
                  <ContactCard :name="x.name"
                  :url="x.url" :icon="x.icon" :color="x.color"></ContactCard>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue';

export default {
  data() {
    return {
      contacts: [
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/ahmedmks/',
          icon: 'mdi-linkedin',
          color: '#0e76a8',
        },
        {
          name: 'Github',
          url: 'https://github.com/ahmedx3',
          icon: 'mdi-github',
          color: '#333',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/ahmedmostafakamel99',
          icon: 'mdi-facebook',
          color: '#3b5998',
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC2FfTOco9V_jFxPjxb-YLhQ',
          icon: 'mdi-youtube',
          color: '#c4302b',
        },
        {
          name: 'Whatsapp',
          url: 'https://wa.me/2001009651241',
          icon: 'mdi-whatsapp',
          color: '#075e54',
        },
      ],
    };
  },
  components: {
    ContactCard,
  },
};
</script>

<style>
#myContact {
  height: 86vh;
}

</style>
