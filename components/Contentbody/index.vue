<template>
  <div class="top">
    <v-card
      v-for="item in Profile"
      :key="item.id"
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="item.img"></v-img>

      <v-card-title>{{ item.title }}</v-card-title>

      <v-card-text>
        <div class="detail">
          {{ item.detail }}
        </div>
      </v-card-text>

      <div class="line">
        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="btn">
          <v-btn color="deep-purple lighten-2" text> How to </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'Contentbody',
  data() {
    return {
      Profile: [
        {
          id: 1,
          title: 'Tom yam kung',
          detail:
            'Tom yam kung or spicy shrimp soup, is the number one of the top ten Thai dishes loved by foreigners, according to a recent investigation. And in fact, it is one of the most favourite dishes for Thai people as well. It is simply because it is so delicious for its unique sour and spicy taste that you will certainly need it more and more if you try it just once.',
          img: require('@/static/tomyumkung.jpg')
        },
        {
          id: 1,
          title: 'Pad thai',
          detail: 'Tom yam kung or spicy shrimp soup, is the number one of the top ten Thai dishes loved by foreigners, according to a recent investigation. And in fact, it is one of the most favourite dishes for Thai people as well. It is simply because it is so delicious for its unique sour and spicy taste that you will certainly need it more and more if you try it just once.',
          img: require('@/static/padthai.jpg'),

        },
        {
          id: 1,
          title: 'Phat kaphrao',
          detail: 'Tom yam kung or spicy shrimp soup, is the number one of the top ten Thai dishes loved by foreigners, according to a recent investigation. And in fact, it is one of the most favourite dishes for Thai people as well. It is simply because it is so delicious for its unique sour and spicy taste that you will certainly need it more and more if you try it just once.',
          img: require('@/static/padkaprao.jpg'),
        },
        
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-around;
}
.detail {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 5000;
}
.top img {
  width: 100%;
}
</style>
