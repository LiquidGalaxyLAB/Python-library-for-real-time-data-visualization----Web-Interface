import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cities from './views/Cities.vue'
import About from './views/About.vue'
import City from './views/City.vue'
import Details from './views/Details.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cities',
      name: 'cities',
      component: Cities
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/city/:cityName',
      name: 'city',
      component: City
    },
    {
      path:'/:role/:cityName',
      name:'details',
      component: Details
    }



  ]
})
