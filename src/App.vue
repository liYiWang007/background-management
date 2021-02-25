<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
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
      products: [
        { name: "马云", price: 200 },
        { name: "马冬梅", price: 100 },
        { name: "马化腾", price: 40 },
        { name: "沈腾", price: 10 }
      ]
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
