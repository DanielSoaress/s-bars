import Vue from 'vue'
import App from './App.vue'
import { vuetify } from './config/index';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification';
import money from 'v-money';
import VueMask from 'v-mask';
import RouterPrefetch from 'vue-router-prefetch';
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker';
import router from "./routes/index";


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
Vue.use(BlackDashboard);
Vue.use(RouterPrefetch);

new Vue({
  beforeCreate: function() {
    Vue.prototype.$routes = router;
  },
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
