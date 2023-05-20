<template>
  <div id="app">
    <router-view v-if="!shouldRedirectToRegister"></router-view>
    <router-link v-else to="/register"></router-link>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import register from './components/RegisterComponent.vue'
// import router from './router';

export default {
  name: 'App',
  data: function() {
    return {
      // register: localStorage.getItem('register') === '1'
    }
  },
  components: {
    // HelloWorld,
    // register,
    // router
  },
  computed: {
    shouldRedirectToRegister() {
      return localStorage.getItem('register') === '1';
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
  margin-top: 60px;
}
</style>
