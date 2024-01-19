<template>
  <div>
    <br />
    <v-row class="top">
      <v-col class="detail" cols="12" md="6"
        ><h1>Thai Food</h1>
        <p>
          Thai Food is a simple yet clever combination of Eastern and Western
          influences harmoniously combined into that je ne sais quoi. Sour,
          sweet, salty, bitter and spicy flavours work together to make each
          dish come alive. Thai food varies depending upon the area or region of
          Thailand the dish originates from. These regions include the north,
          northeast, south and central.
        </p>
        <v-btn>More</v-btn>
      </v-col>
      <v-col cols="12" md="6"
        ><img
          src="https://s.isanook.com/tr/0/ud/286/1432241/ng.jpg?ip/crop/w670h402/q80/jpg"
          alt=""
      /></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style lang="scss" scoped>
.top {
  margin-top: 80px;
}
.detail {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
</style>
