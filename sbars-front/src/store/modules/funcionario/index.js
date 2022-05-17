import { api, router } from '../../../config';
import  { navigate, telFormat, offTelFormat, notify, dateFormatMonthYear } from '../../../util';

export default {
  namespaced: true,
  state: {
    datasource: [],
    pagination: {
      current_page: 1,
      per_page: 5,
      total: 0,
      search: '',
      sort: '',
      order: ''
    },
    loading: false,
    success: false,
    error: false
  },

  getters: {
    loading: state => state.loading,
    datasource: state => state.datasource,
    pagination: state => state.pagination,
    success: state => state.success,
    error: state => state.error
  },

  actions: {
    // LISTAR
    listar: async ({ commit, state }, params = state.pagination) => {
      try {
        commit('SET_LOADING');
        const response = await api.get('base/funcionario', { params });
        response.data.data.forEach((item) => {
          item.tel_func = telFormat(item.tel_func);
        })
        commit('SET_DATASOURCE', response.data);
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.data.message);
      }
    },

    // CADASTRAR
    cadastrar: async ({ commit }, data) => {
      try {
        await commit('SET_LOADING');
        data.niver_func = dateFormatMonthYear(data.niver_func);
        data.tel_func = offTelFormat(data.tel_func);
        const response = await api.post('base/funcionario', data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.funcionario.fullPath);
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response.data);
      }
    },

    // ATUALIZAR
    atualizar: async ({ commit }, data) => {
      try {
        commit('SET_LOADING');
        data.tel_func = offTelFormat(data.tel_func);
        data.niver_func = dateFormatMonthYear(data.niver_func);
        const response = await api.put(`base/funcionario/${data.id}`, data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.funcionario.fullPath);
        return response;
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.data.message);
      }
    },

    // EXIBIR
    exibir: async ({ commit }, id) => {
      try {
        commit('SET_LOADING');
        const response = await api.get(`base/funcionario/${id}`);
        response.data.data.tel_func = telFormat(response.data.data.tel_func);
        commit('SET_SUCCESS');
        return response.data.data;
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.data.message);
      }
    },

    // EXCLUIR
    excluir: async ({ commit }, id) => {
      try {
        const response = await api.delete(`base/funcionario/${id}`);
        notify('success', response.data.message);
        commit('SET_SUCCESS');
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.data.message);
      }
    }
  },

  mutations: {
    SET_LOADING: state => {
      state.loading = true;
      state.success = false;
      state.error = false;
      state.datasource = [];
    },
    SET_SUCCESS: state => {
      state.success = true;
      state.loading = false;
      state.error = false;
    },
    SET_ERROR: (state, payload = true) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
    SET_DATASOURCE: (state, payload) => {
      const {
        data,
        current_page,
        per_page,
        total,
        search,
        order,
        sort
      } = payload;
      state.datasource = data;
      state.pagination = {
        ...state.pagination,
        current_page,
        per_page,
        total,
        search,
        order,
        sort
      };
      state.success = true;
      state.loading = false;
    }
  }
};
