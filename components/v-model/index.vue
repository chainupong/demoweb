<template>
    <div>
        <h1>v-model</h1>
        <input v-model="message" type="text" placeholder="Enter you name">
        <div>{{ message }}</div>
        <button @click="message=''">Reset</button>
    </div>
</template>

<script>
    export default {
        name : "app",
        data() {
            return{
                message:""
            }
        },
    }
</script>
 
<style lang="scss" scoped>

</style>