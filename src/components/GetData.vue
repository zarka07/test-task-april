<template>
  <div>

    <button @click="getApi">get api</button>

    <div>
      {{response.name}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'get-data',
  data(){
    return{
      response:{},
    }
  },
  methods:{
    
    async getApi(){
        const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL)
                .catch(error => {
                    if(error.response.status){
                        const statusCode = error.response.status
                        console.log(statusCode)      
                    }
                })
        this.response = Response.data;
                
        },
  }
}
</script>

<style>


</style>
