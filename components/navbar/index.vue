<template>
  <div class="Navbar">

    <v-row>
      <v-col cols="12" md="3">
        <h1>FOOD</h1>
      </v-col>
      <v-col cols="12" md="9">
        <ul>
          <li ><NuxtLink to ="/">Home</NuxtLink></li>
          <li><NuxtLink to="/kuytest">Menu</NuxtLink></li>
          <li><NuxtLink to="/vmodel">History</NuxtLink></li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
h1{
    color: white;
    padding-left: 3rem;
}

li{
    padding: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    color: white;
   
}

li a {
text-decoration: none;
color: white;
}

ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
   
}
.row {
    align-items: center;
}
.Navbar{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: black;
    z-index: 999;
}

</style>
