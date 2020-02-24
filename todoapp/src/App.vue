<template>
  <div id="app">
    <TheSideBar/>
    <router-view />
  </div>
</template>

<script>
import TheSideBar from '@/components/TheSideBar.vue'
export default {
  name :"App",
  components:{
    TheSideBar
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
  display : flex;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
