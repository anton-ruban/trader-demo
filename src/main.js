import Vue from 'vue';
import Vuetify from 'vuetify';
import VueGoodTablePlugin from 'vue-good-table';
import VueToast from 'vue-toast-notification';
import VueRouter from 'vue-router';
import moment from 'vue-moment';
import vuexI18n from 'vuex-i18n';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import stockInit from 'highcharts/modules/stock'

import 'vuetify/dist/vuetify.min.css';
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-toast-notification/dist/index.css';

import router from './router';
import App from './App.vue';
import store from './store';
import translationsCn from './i18n/cn.js';

stockInit(Highcharts)
exportingInit(Highcharts)

Vue.use(VueRouter)
Vue.use(HighchartsVue)
Vue.use(Vuetify)
Vue.use(moment)
Vue.use(VueToast, {
  position: 'top-right'
});
Vue.use(vuexI18n.plugin, store);
Vue.use(VueGoodTablePlugin);
Vue.config.productionTip = false

// add translations
Vue.i18n.add('en', translationsCn);
// default locale is english
Vue.i18n.set('en');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
