<template>
  <div id="app">
    <navs></navs>
    <transition name="fade">
      <router-view/>
    </transition>
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  transition: opacity .5s;
  opacity: 0;
}
</style>
