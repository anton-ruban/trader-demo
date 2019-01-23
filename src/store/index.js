import Vue from 'vue';
import Vuex from 'vuex';
import watch from './modules/watch';
import others from './modules/others';
import marketPrices from './modules/marketPrices';
import tradingPanel from './modules/tradingPanel';
import tabs from './modules/tabs';
import auth from './modules/auth';
import orders from './modules/orders';
import contracts from './modules/contracts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    watch,
    others,
    marketPrices,
    tradingPanel,
    tabs,
    auth,
    orders,
    contracts,
  },
});
