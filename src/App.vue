<template>
<div class="wrapper">
  <Header/>
  <router-view/>
  <Footer/>
</div>
  
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0px;
}
.wrapper{
  min-height: 100%;
  /* margin-bottom:-50px; */
}
</style>
