<template>
    <div class="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="(item, index) in products" :key="index">
                <span class="name">{{ item.name }}</span>
                <span class="price"> ${{ item.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ProductListOne",
  props: ["products"],
  data() {
    return {};
  },
  methods: {}
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


