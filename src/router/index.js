import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import renwu from '@/pages/renwu'
import yewlist from "@/pages/yewlist"
import rwlist from '@/pages/rwlist'
import shuju from '@/pages/shuju'
import tonghua from '@/pages/tonghua'
import yhss from '@/pages/yhss'
import geren from '@/pages/geren'
import login from '@/pages/login'


Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/renwu'
    },
    {
      path: '/home',
      name: '首页',
      component: home,
      children:
      [
      {
        path: '/renwu',
        name: '机器人',
        component: renwu
      },
      {
        path: '/ywlist',
        name: '业务列表',
        component: yewlist
        },
        {
          path: '/rwlist',
          name: '业务列表',
          component: rwlist
        },
        {
          path: '/shuju',
          name: '业务列表',
          component: shuju
        },
        {
          path: '/tonghua',
          name: '业务列表',
          component: tonghua
        },
        {
          path: '/yhss',
          name: '用户搜索',
          component: yhss
        },
        {
          path: '/geren',
          name: '个人中心',
          component: geren
        },
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: login,
    }
  ]
})
