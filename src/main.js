import 'babel-polyfill'
import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
