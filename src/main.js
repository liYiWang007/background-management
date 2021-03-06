import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import AddCustomer from './components/AddCustomer'
import CustomerDetails from './components/CustomerDetails'
import EditCustomer from './components/EditCustomer'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 设置路由
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Home},
    {path:'/aboutUs',component:AboutUs},
    {path:'/addCustomer',component:AddCustomer},
    {path:'/edit/:id',component:EditCustomer},
    {path:'/detail/:id',component:CustomerDetails},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
