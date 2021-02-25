<template>
  <div class="customer-details">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">
      {{ customer.name }}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="`/edit/${customer.id}`"
          >编辑</router-link
        >
        <button class="btn btn-danger" @click="delCustomer(customer.id)">
          删除
        </button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone"></span> {{ customer.phone }}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"></span> {{ customer.email }}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-home"></span>
        {{ customer.graducationschool }}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-cloud"></span> {{ customer.education }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomerDetails",
  components: {},
  data() {
    return {
      customer: ""
    };
  },
  created() {
    this.fecthCustomers(this.$route.params.id);
  },
  methods: {
    fecthCustomers(id) {
      this.$http.get("http://localhost:3111/users/" + id).then(response => {
        // console.log(response.body)
        this.customer = response.body;
      });
    },
    updateCustomer(e) {
      if (!this.customer.email || !this.customer.name) {
        alert("请填写必要信息");
      } else {
        let updateCustomer = {
          name: this.customer.name,
          email: this.customer.email,
          education: this.customer.education,
          phone: this.customer.phone,
          graducationschool: this.customer.graducationschool
        };
        this.$http
          .put(
            "http://localhost:3111/users/" + this.$route.params.id,
            updateCustomer
          )
          .then(() => {
            this.router.push({
              path: "/",
              query: { postSuccess: "用户信息修改成功！" }
            });
          });
      }
      e.preventDefault();
    },
    delCustomer(id) {
      // console.log(id)
      this.$http.delete("http://localhost:3111/users/" + id).then(() => {
        this.$router.push({ path: "/", query: { postSuccess: "删除成功！" } });
      });
    }
  }
};
</script>

<style>
</style>
