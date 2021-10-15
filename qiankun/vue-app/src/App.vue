<template>
  <div class="header">
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
#vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .nav-item{
    line-height: 50px;
    padding-right: 30px;
  }
}
</style>
