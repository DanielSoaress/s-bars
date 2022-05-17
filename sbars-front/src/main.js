import Vue from 'vue'
import App from './App.vue'
import { vuetify } from '@/config';
import VueRouter from 'vue-router';
import routes from './routes/routes';
import Notifications from 'vue-notification';
import money from 'v-money';
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(money, {precision: 2})

// importação do store (VUEX)
import store from './store';
Vue.config.productionTip = false

// importações global
import { components } from './global';
// iniciando o global
Vue.use(components);

Vue.use(Notifications);

// iniciando plugins
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  beforeCreate: function() {
    Vue.prototype.$routes = router;
  },
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
