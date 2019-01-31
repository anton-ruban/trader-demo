import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import moment from 'vue-moment';
import HighchartsVue from 'highcharts-vue'

Vue.use(VueRouter)
Vue.use(HighchartsVue)
Vue.use(Vuetify)
Vue.use(moment)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
