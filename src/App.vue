<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './components/Head.vue'

export default {
  name: 'App',
  components: {
    Head
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
 width: 100%;
  height: 100%;
}
.radius-4{
  border-radius: 4px;
}
.blog-card {
  width: 100%;
  height: auto;
  padding: 20px;
  background: #f8f8f8;
  border: 1px dashed #ddd;
  margin-top: 20px;
  box-sizing: border-box;
}
.margin-a{
  margin: 0 auto;
}
a{
  text-decoration: none;
}
</style>
