<template>
  <div class="home container">
    <post-success v-if="postSuccess" :message="postSuccess"></post-success>
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
        <tr v-for="curstomer in curstomers" :key="curstomer.id">
          <td>{{ curstomer.name }}</td>
          <td>{{ curstomer.phone }}</td>
          <td>{{ curstomer.email }}</td>
          <td>{{ curstomer.website }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import PostSuccess from "./PostSuccess.vue";
export default {
  components: { PostSuccess },
  name: "Home",
  data() {
    return {
      curstomers: [],
      postSuccess: "",
    };
  },
  created() {
    if (this.$router.query.postSuccess) {
      this.postSuccess = this.$router.query.postSuccess;
    }
    this.fecthCurstomers();
  },
  updated() {
    this.fecthCurstomers();
  },
  methods: {
    fecthCurstomers() {
      this.$http.get("http://localhost:3111/users").then((response) => {
        console.log(response.body);
        this.curstomers = response.body;
      });
    },
  },
};
</script>
<style scoped>
</style>