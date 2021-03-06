import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/pages/MainPage';
import FrontPage from '../components/pages/FrontPage';
import Warning from '../components/front/Warning';
import SignIn from '../components/front/SignIn';
import SignUp from '../components/front/SignUp';
import TradingView from '../components/trading/TradingView';
import NewsView from '../components/news/NewsView';
import AccountView from '../components/account/AccountView';
import Register from '../components/front/Register';
import EmailVerification from '../components/front/EmailVerification';
import PhoneVerification from '../components/front/PhoneVerification';
import TwoFactorVerification from '../components/front/TwoFactorVerification';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: FrontPage,
      children: [
        {
          path: '/',
          redirect: '/main/trading'
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
        },
        {
          path: 'email-verification',
          component: EmailVerification
        },
        {
          path: 'phone-verification',
          component: PhoneVerification
        },
        {
          path: 'two-factor-verification',
          component: TwoFactorVerification
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
          meta: { 
            requiresAuth: true
          }
        },
        {
          path: 'news',
          component: NewsView,
          meta: { 
            requiresAuth: true
          }
        },
        {
          path: 'account',
          component: AccountView,
          meta: { 
            requiresAuth: true
          }
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    const authInfo = JSON.parse(localStorage.getItem('authInfo'));
    if (!authInfo || !authInfo.isLoggedIn) {
      next({
        path: '/signin',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})

export default router;
