<template>
  <div class="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(item, index) in saleProducts" :key="index">
        <span class="name">{{ item.name }}</span>
        <span class="price"> ${{ item.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">扣钱</button>
  </div>
</template>

<script>
export default {
  name: "ProductListOne",
  computed: {
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice() {
      // 通过commit调用store里的方法
      this.$store.commit("reducePrice");
      // 直接写在vue里会报错,因为是vuex，例子如下
      // this.$store.state.products.array.forEach(product => {
      //   product.price -=1
      // });
    }
  }
};
</script>
<style scoped>
.product-list-one {
  width: 300px;
  padding: 20px;
  background: #f3db87;
  margin-bottom: 20px;
}
.product-list-one h2 {
  color: #ffffff;
}
.product-list-one li {
  display: inline-block;
  padding: 10px;
  margin: 6px;
  background: #fff6d5;
}
.name {
  color: #4a3b05;
}
.price {
  font-weight: bold;
  color: #f38787;
}
</style>


