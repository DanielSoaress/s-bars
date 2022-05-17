import Vue from 'vue';
import Vuex from 'vuex';
import * as modules from './modules';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    ...modules
  }
});

export default Store;