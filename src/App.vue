<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  name: "App",
  components: {
    ProductListOne,
    ProductListTwo
  },
  data() {
    return {
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.radius-4 {
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
.margin-a {
  margin: 0 auto;
}
a {
  text-decoration: none;
}
</style>
