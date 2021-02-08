<template>
  <header >
      <span class="logo">用户管理系统</span>
    <ul class="nav">
      <li><router-link to="/" exact="">主页</router-link></li>
      <li><router-link to="/aboutUs" exact="">关于我们</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
header{
  width: 100%;
  text-align: center;
  height: 60px;
  padding-top: 21px;
  background: #409EFF;
  overflow: hidden;
  text-align: center;
  color: #ffffff;
}
.logo{
  font-weight: bold;
}
.nav{
  display: inline-block;
  width: 400px;
}
.nav li{
  display: inline-block;
  height: 24px;
  margin: 0 24px;
}
.nav a{
  color: #ffffff;
  border-bottom: 3px solid transparent;
}
a.router-link-active{
  border-bottom-color: #fff;
}
</style>