import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {router} from './helpers';
import VueFormulate from '@braid/vue-formulate';
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false;

Vue.use(VueFormulate);

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
