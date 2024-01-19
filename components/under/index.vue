<template>
  <v-footer class="top">
    <div>
      <v-icon>mdi-facebook</v-icon>
      <v-icon>mdi-youtube</v-icon>
      <v-icon>mdi-github</v-icon>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'under',
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  position: absolute;
  left: 0;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
