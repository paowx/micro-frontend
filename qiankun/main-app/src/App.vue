<template>
  <header>
    <router-link class="menu-item" to="/">Home</router-link>
    <router-link class="menu-item" to="/about">About</router-link>
    <router-link class="menu-item" to="/app1">Vue app</router-link>
    <router-link class="menu-item" to="/app2">React app</router-link>
  </header>
  <div id="appContainer"></div>
  <router-view/>
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

<style>
html, body{
  margin: 0;
  padding: 0;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  background: #2c3e50;
}
.menu-item{
  line-height: 50px;
  padding-right: 30px;
  color: #fff;
}
</style>
