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
      customer: "",
    };
  },
  methods: {
    fecthCustomers(id) {
      this.$http.get("http://localhost:3111/users/" + id).then((response) => {
        // console.log(response.body)
        this.customer = response.body;
      });
    },
    delCustomer(id){
        // console.log(id)
        this.$http.delete("http://localhost:3111/users/" + id).then(()=> {
            this.$router.push({path:'/',query:{postSuccess:"删除成功！"}})
        })
    }
  },
  created() {
    this.fecthCustomers(this.$route.params.id);
  },
};
</script>

<style>
</style>
