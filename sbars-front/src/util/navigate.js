import Vue from 'vue';

const navigate = ( path ) => {
  return Vue.prototype.$routes.push(path);
};

export default navigate;
