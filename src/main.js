import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify & material-design-icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  name: 'App',
  render: h => h(App)
}).$mount('#app')
