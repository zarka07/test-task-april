<template>
  <div>
      <progress-bar 
        :barPercent="barPercent" 
        :barColor="barColor" 
        :barHeight="barHeight" 
        :barProgress="barProgress"
      ></progress-bar>
      data processing 
  </div>
</template>

<script>
import ProgressBar from '../components/Bar.vue';

export default {
    name: 'data-processing',
    components:{
        'progress-bar': ProgressBar
    },
    data(){
        return{
            barColor: '#419330',
            barHeight: 42,
            barPercent: 0,
            barProgress: ''
        }
    },
    methods:{

    },
    mounted(){
        let i = 0;
        if (i == 0) {
            i = 1;
            this.barPercent = 1;
            let id = setInterval(()=>{
                if (this.barPercent >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                this.barPercent++
            }
            }, 10);
        }
    },
    watch:{
        barPercent(){
            this.barProgress = this.barPercent+'%'
        }
    }
}
</script>

<style>

</style>