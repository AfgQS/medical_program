import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello/Hello'
import business from '@/views/Business/business.vue'
import developing from '@/views/Developing/developing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/developing',
      name: 'developing',
      component: developing
    }
  ]
})
