import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/study/vue',
      name: 'vue-index',
      component: () => import('./views/study/vue/VueIndex.vue')
    },
    {
      path: '/study/js',
      name: 'js-index',
      component: () => import('./views/study/js/JsIndex.vue')
    },
    {
      path: '/study/node',
      name: 'node-index',
      component: () => import('./views/study/node/NodeIndex.vue')
    },
    {
      path: '/contents/vue-1',
      name: 'content-vue-1',
      component: () => import('./views/contents/vue/vue1.vue')
    },
    {
      path: '/contents/vue-2',
      name: 'content-vue-2',
      component: () => import('./views/contents/vue/vue2.vue')
    }
  ]
})
