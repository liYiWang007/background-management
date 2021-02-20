<template>
  <div class="home container">
    <post-success-msg v-if="postSuccess" :message="postSuccess"></post-success-msg>
    <h1 class="page-header">用户管理系统</h1>
    <input class="model" type="text" placeholder="搜索" v-model="search">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
        <tr v-for="customer in searchTxt(customers,search)" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <router-link class="btn btn-default" :to="`/detail/${customer.id}`">详情</router-link>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
  import PostSuccessMsg from "./PostSuccessMsg";
  export default {
    components: { PostSuccessMsg },
    name: "Home",
    data() {
      return {
        customers: [],
        postSuccess: "",
        search: ''
      };
    },
    methods: {
      fecthCustomers() {
        this.$http.get("http://localhost:3111/users").then((response) => {
          this.customers = response.body;
        });
      },
      searchTxt(customers, value) {
        return customers.filter((customer) => {
          return customer.name.match(value)
        })
      }
    },
    created() {
      if (this.$route.query.postSuccess) {
        this.postSuccess = this.$route.query.postSuccess;
      }
      this.fecthCustomers();
    },
    updated() {
      this.fecthCustomers()
    },
  };
</script>