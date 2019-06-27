import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/pages/MainPage';
import FrontPage from '../components/pages/FrontPage';
import Home from '../components/front/Home';
import Warning from '../components/front/Warning';
import SignIn from '../components/front/SignIn';
import SignUp from '../components/front/SignUp';
import TradingView from '../components/trading/TradingView';
import NewsView from '../components/news/NewsView';
import AccountView from '../components/account/AccountView';
import Register from '../components/front/Register';

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
        },
        {
          path: 'signin',
          component: SignIn
        },
        {
          path: 'signup',
          component: SignUp
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/main',
      component: MainPage,
      children: [
        {
          path: 'trading',
          component: TradingView,
        },
        {
          path: 'news',
          component: NewsView,
        },
        {
          path: 'account',
          component: AccountView,
        }
      ]
    },
    // {
    //   path: '/coins/:id',
    //   name: 'Coins',
    //   component: Coins
    // }
  ]
})
