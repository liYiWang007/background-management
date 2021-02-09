import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 设置路由
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/aboutUs',component:AboutUs},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
