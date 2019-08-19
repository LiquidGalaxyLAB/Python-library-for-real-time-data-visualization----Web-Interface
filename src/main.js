import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import axios from 'axios'
import DataTable from 'v-data-table'


import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
const fs = require('fs');

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(axios)
Vue.use(DataTable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
