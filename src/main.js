import Vue from 'vue'
import App from './App.vue'

import { Layout,Menu,Icon,Breadcrumb,Divider,Tabs,Button,Card,Avatar,Empty,List,Table,Tag } from 'ant-design-vue';
import router from './router'

//Vue.component(Layout.name, Layout)
//Vue.component(Layout.Sider.name, Layout.Sider)
//Vue.component(Layout.Content.name, Layout.Content)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Breadcrumb)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(Button)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(Empty)
Vue.use(List)
Vue.use(Table)
Vue.use(Tag)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
