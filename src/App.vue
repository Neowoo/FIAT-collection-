<template>
  <div id="app">
    <navs></navs>
    <router-view/>
    <footerCompo></footerCompo>
  </div>
</template>

<script>
import navs from './components/navbar'
import footerCompo from './components/footer'
export default {
  name: 'App',
  components:{
    navs,
    footerCompo
  },
  data(){
    return{
      homeShow: true,
      trainEQshow: false
    }
  },
  methods: {
    makeChange: function (msg) {
      this.homeShow = msg;
      this.trainEQshow = !msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 32px; */
  /* margin-left: 48px; */
  /* margin-right: 48px; */
  font-family: 'Noto Sans TC', sans-serif;
  /* height: 100vh; */
  overflow: hidden;
}
</style>
