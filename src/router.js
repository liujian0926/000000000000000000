
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 首页模块组件
import index from './Pages/index.vue';
// 登录页组件
import login from './Pages/login.vue';

// 平台钱包管理模块
import home from './Pages/wallet/home.vue';
// 钱包数据组件
import data from './Pages/wallet/data.vue';
// 收入支出组件
import income from './Pages/wallet/income.vue';
// 平台提现记录组件
import platformCash from './Pages/wallet/platform_cash.vue';
// 平台收益组件
import platformEarnings from './Pages/wallet/platform_earnings.vue';
// 项目usdt组件
import projectUsdt from './Pages/wallet/project_usdt.vue';
// 项目积分兑换组件
import projectExchange from './Pages/wallet/project_exchange.vue';
// 项目积分充值
import projectRecharge from './Pages/wallet/project_recharge.vue';
// B端usdt组件
import Busdt from './Pages/wallet/B_usdt.vue';
// B端积分兑换
import Bexchange from './Pages/wallet/B_exchange.vue';
// B端积分买卖组件
import Bdeal from './Pages/wallet/B_deal.vue';
// 平台usdt组件
import platformUsdt from './Pages/wallet/platform_usdt.vue';

// 运营模块
import runHome from './Pages/run/run_home.vue';
// 数据观察模块
import observer from './Pages/run/observer.vue';
// 收益分析
import analysis from './Pages/run/analysis.vue';
// B端用户
import users from './Pages/run/B_users.vue';
// A端用户
import Ausers from './Pages/run/A-users.vue';
// 订单数据
import orderData from './Pages/run/order_data.vue';
// B端保证金
import Bdeposit from './Pages/run/B_deposit.vue';
// 交易习惯
import habit from './Pages/run/habit.vue';

// 用户管理模块
import usersHome from './Pages/users/users_home.vue';
// A用户管理
import AuserManager from './Pages/users/A_userManager.vue'
// B用户管理
import BuserManager from './Pages/users/B_userManager.vue'

// 交易数据查询模块
import queryHome from './Pages/query/query_home.vue';
// a端数据详情页
import Adetail from './Pages/users/A_detail.vue';



const routes = [
  {path:'/', component: index},
  {path: '/login', component: login },
  // 钱包模块
  {path: '/home', component: home,
  children:[
    {path:'/data',component:data},
    {path:'/income',component:income},
    {path:'/platform_cash',component:platformCash},
    {path:'/platform_earnings',component:platformEarnings},
    {path:'/project_usdt',component:projectUsdt},
    {path:'/project_exchange',component:projectExchange},
    {path:'/project_recharge',component:projectRecharge},
    {path:'/B_usdt',component:Busdt},
    {path:'/B_exchange',component:Bexchange},
    {path:'/B_deal',component:Bdeal},
    {path:'/platform_usdt',component:platformUsdt},

  ]
  },
  // 运营模块
  {path:'/run_home',component:runHome,
  children:[
    {path:'/observer',component:observer},
    {path:'/analysis',component:analysis},
    {path:'/users',component:users},
    {path:'/A-users',component:Ausers},
    {path:'/order_data',component:orderData},
    {path:'/B_deposit',component:Bdeposit},
    {path:'/habit',component:habit},
  ]
},
// 用户管理模块
{path:'/users_home',component:usersHome,
children:[
  {path:'/A_userManager',component:AuserManager},
  {path:'/B_userManager',component:BuserManager},
  {path:'/A_detail',component:Adetail},
]

},
// 用户管理模块
{path:'/query_home',component:queryHome,
  children:[
    
  ]
}
  

]


const router = new Router({
  routes
})

export default router