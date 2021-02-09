<template>
  <v-app dark="">
      <v-row>
        <v-col  xs="12" sm="6" md="6" lg="6"
          v-for="x in Fields" :key="x">
          <category-card :images=x.image
          :name=x.name :myRoute=x.route></category-card>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue';

export default {
  data() {
    return {
      webImage: 'https://blog.hotmart.com/blog/2020/03/BLOG_web-design-1.png',
      Fields: [
        {
          image: 'https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg',
          name: 'Web Development',
          route: '/webdev',
        },
        {
          image: 'https://instabug.com/blog/wp-content/uploads/2017/09/Featured.jpg',
          name: 'Game Development',
          route: '/gamedev',
        },
      ],
    };
  },
  methods: {
  },
  components: {
    CategoryCard,
  },
};
</script>

<style scoped>
.col {
    margin: 0;
    padding: 0;
}
</style>
