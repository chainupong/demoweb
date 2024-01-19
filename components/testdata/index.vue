<template>
  <div>
    <div class="card" v-for="item in Profile" :key="item">
  <img src="@/static/v.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{ item.fName }} {{ item.lName }}</b></h4> 
    <p>{{ item.phone }}</p> 
  </div>
</div>
      
  </div>
</template>

<script>
export default {
  name: 'kuytest',
  data() {
    return {
      Profile: [
        {
          id: 1,
          fName: 'นายสมศักดิ์',
          lName: 'มีศรี',
          Age: '32',
          phone: '092-878-2236',
        },
        {
          id: 2,
          fName: 'นางมลฤดี',
          lName: 'จนใจ',
          Age: '45',
          phone: '090-878-2236',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

</style>
