<template>
  <div id="app">
    <home v-if="this.$route.meta.showHome"></home>
    <!-- <publish-vegetable v-else-if="this.$route.meta.publishVegetable"></publish-vegetable> -->
    <router-view v-else></router-view>
  </div>
</template>

<script>

import home from './components/HomeComponent.vue';
// import PublishVegetable from './components/PublishVegetable.vue';

export default {
  name: 'App',
  data: function() {
    return {
    }
  },
  components: {
    // PublishVegetable,
    home,
  },
  computed: {
    shouldRedirectToLogin() {
      return localStorage.getItem('login') === '1';
    },
    shouldRedirectToAdminLogin(){
      return localStorage.getItem('adminlogin')==='1';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  background: #d3d3d3;
}
* {
  margin: 0;
}
</style>
