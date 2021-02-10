<template>
  <div class="add-curstomer container">
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
      <h4>用户信息</h4>
      <div class="form-group">
        <label for="">姓名</label>
        <input
          type="text"
          class="form-control"
          placeholder="name"
          v-model="customer.name"
        />
      </div>
      <div class="form-group">
        <label for="">电话</label>
        <input
          type="text"
          class="form-control"
          placeholder="phone"
          v-model="customer.phone"
        />
      </div>
      <div class="form-group">
        <label for="">邮箱</label>
        <input
          type="text"
          class="form-control"
          placeholder="email"
          v-model="customer.email"
        />
      </div>
      <div class="form-group">
        <label for="">学历</label>
        <input
          type="text"
          class="form-control"
          placeholder="education"
          v-model="customer.education"
        />
      </div>
      <div class="form-group">
        <label for="">毕业学校</label>
        <input
          type="text"
          class="form-control"
          placeholder="graducationschool"
          v-model="customer.graducationschool"
        />
      </div>
      <div class="form-group">
        <label for="">职业</label>
        <input
          type="text"
          class="form-control"
          placeholder="profession"
          v-model="customer.profession"
        />
      </div>
      <div class="form-group">
        <label for="">个人简介</label>
        <textarea
          cols="30"
          rows="3"
          class="form-control"
          placeholder="profile"
          v-model="customer.profile"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">添加</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCustomer",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    addCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        alert("请添加漏填的信息");
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          address: this.customer.address,
          email: this.customer.email,
          graducationschool: this.customer.graducationschool,
          professsion: this.customer.professsion,
          profile: this.customer.profile,
        };
        this.$http
          .post("http://localhost:3111/users", newCustomer)
          .then(() => {
            // 检查数据是否post成功
            // console.log(response);
            this.$router.push({ path: "/", query: {postSuccess:"用户信息添加成功！"}}); // 只是自定义的postSuccesst属性,要赋值
          });
      }
      e.preventDefault(); //让浏览器不要执行事件关联的默认动作，比如在提交就会阻止别的提交事件
    },
  },
};
</script>
<style scoped>
</style>