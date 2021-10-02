import Vue from 'vue'
import App from './App.vue'
import { vuetify } from '@/config';
import VueRouter from 'vue-router';
import routes from './routes/routes';



Vue.config.productionTip = false

// importações global
import { components } from './global';

// iniciando o global
Vue.use(components);

// iniciando plugins
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
