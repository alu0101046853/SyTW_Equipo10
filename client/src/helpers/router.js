import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/Home'
import LoginPage from '../views/Login'
import SignUpPage from '../views/Signup'
import GuachincheRegisterPage from '../views/GuachincheRegister'
import UserPage from '../views/User'
import ReservasPage from '../views/MyReservas'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage},
    { path: '/guachincheregister', component: GuachincheRegisterPage},
    { path: '/myreservas', component: ReservasPage},
    { path: '/user/:id', component: UserPage },
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});