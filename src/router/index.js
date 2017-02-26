import Vue from 'vue'
import Router from 'vue-router'
import Homework from 'views/Homework'
import Schedule from 'views/Schedule'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homework',
      name: 'Homework',
      component: Homework
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    { path: '*', redirect: '/' }
  ]
})
