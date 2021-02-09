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
  height: 40px;
  padding-top: 21px;
  background: #f8f8f8;
  overflow: hidden;
  text-align: center;
  color: #404040;
  border-bottom: 1px solid #eee;
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
  color: #404040;
  border-bottom: 3px solid transparent;
}
a.router-link-active{
  border-bottom-color: #404040;
}
</style>