import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as d3 from 'd3'
import axios from 'axios'
import * as moment from 'moment'

const api_port = process.env.VUE_APP_APIPORT || 5000
console.log(api_port,process.env)
Vue.prototype.$d3 = d3
Vue.prototype.$api = `http://140.113.210.9:${api_port}/api/v1`
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment
// Vue.prototype.$router = router
//Vue.prototype.$api = 'http://140.113.213.115:50000/api'
// Vue.prototype.$api = 'http://localhost:5000/api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')