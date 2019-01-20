import Vue from 'vue'
import Router from 'vue-router'
import TradingPage from '../components/pages/TradingPage';
import FrontPage from '../components/pages/FrontPage';
import Home from '../components/front/Home';
import Warning from '../components/front/Warning';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: FrontPage,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: 'warning',
          component: Warning
        }
      ]
    },
    {
      path: '/trading',
      component: TradingPage
    },
    // {
    //   path: '/coins/:id',
    //   name: 'Coins',
    //   component: Coins
    // }
  ]
})
