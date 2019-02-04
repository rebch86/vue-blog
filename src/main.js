import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// https://www.npmjs.com/package/vue-simple-markdown
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

// Vuetify & material-design-icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  name: 'App',
  render: h => h(App)
}).$mount('#app')
