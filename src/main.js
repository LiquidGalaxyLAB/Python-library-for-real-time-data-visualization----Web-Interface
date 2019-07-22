import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
