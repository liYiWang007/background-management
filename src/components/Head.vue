<template>
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button
          class="navbar-toggle collapsed"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <li>
          <router-link class="logo" to="/" exact>用户管理系统</router-link>
        </li>
      </div>
      <div class="navbar-collapse collapse" role="navigation">
        <ul class="nav navbar-nav">
          <li><router-link to="/" exact>主页</router-link></li>
          <li><router-link to="/aboutUs" exact>关于我们</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/addCustomer" exact>添加用户</router-link></li>
        </ul>
      </div>
    </div>
  </div>
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
.logo {
  line-height: 50px;
  margin-right: 4em;
  font-weight: bold;
  font-size: 1.2em;
  color: #eee;
}
</style>