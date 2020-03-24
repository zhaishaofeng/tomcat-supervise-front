import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建VueRouter对象并导出
export default new Router({
    routes: constantRouterMap
})

// 3.将router对象传入到vue实例
