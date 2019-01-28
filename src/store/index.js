import Vue from 'vue';
import Vuex from 'vuex';
import watch from './modules/watch';
import positions from './modules/positions';
import marketPrices from './modules/marketPrices';
import trading from './modules/trading';
import tabs from './modules/tabs';
import auth from './modules/auth';
import orders from './modules/orders';
import contracts from './modules/contracts';
import overview from './modules/overview';
import news from './modules/news';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    watch,
    positions,
    marketPrices,
    trading,
    tabs,
    auth,
    orders,
    contracts,
    overview,
    news
  },
});
