<template>
    <div>
<ul v-for="item in dataapi" :key = "item.id">
<li>{{item.title }}</li>
</ul>
    </div>
</template>

<script>
import bannerapi from'@/api/bannerapi'

export default {
    name:'testapi',
    data(){
        return{
            dataapi:[],
        }

    },
    mounted(){
        this.getDataBanner()
    },
    methods:{
        async getDataBanner(){
            try{
                const data = await bannerapi.getAllBanner()
                console.log(data)
                this.dataapi = data

            }
            catch(error){
                console.error(error.respone)
            }
        
        },
    }

   
}
</script>

<style lang="scss" scoped>

</style>