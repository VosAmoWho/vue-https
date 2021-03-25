import Vue from 'vue'
import App from './App.vue'

import api from '@/core/api'
import http from "@/core/http";
import "@/core/axios";

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.$http = http

new Vue({
    render: h => h(App),
}).$mount('#app')
