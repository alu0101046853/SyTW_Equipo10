import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home'
import LoginPage from '../views/Login'
import SignUpPage from '../views/Signup'
import GuachincheRegisterPage from '../views/GuachincheRegister'
import UserProfile from '../views/Profile'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage},
    { path: '/guachincheregister', component: GuachincheRegisterPage},
    { path: '/user/:id', component: UserProfile },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});