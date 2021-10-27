import { api, router } from '../../../config';
import  { navigate, telFormat, offTelFormat, notify, brlFormat, dateFormatMonthYear } from '../../../util';

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
        const response = await api.get('base/cliente', { params });
        response.data.data.forEach((item) => {
          item.tel_cliente = telFormat(item.tel_cliente);
          item.cashback_cliente = brlFormat(item.cashback_cliente);
        })
        commit('SET_DATASOURCE', response.data);
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // CADASTRAR
    cadastrar: async ({ commit }, data) => {
      try {
        await commit('SET_LOADING');
        data.niver_cliente = dateFormatMonthYear(data.niver_cliente);
        data.tel_cliente = offTelFormat(data.tel_cliente);
        const response = await api.post('base/cliente', data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.cliente.fullPath);
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response.data);
      }
    },

    // ATUALIZAR
    atualizar: async ({ commit }, data) => {
      try {
        commit('SET_LOADING');
        data.tel_cliente = offTelFormat(data.tel_cliente);
        data.niver_cliente = dateFormatMonthYear(data.niver_cliente);
        const response = await api.put(`base/cliente/${data.id}`, data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.cliente.fullPath);
        return response;
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // EXIBIR
    exibir: async ({ commit }, id) => {
      try {
        commit('SET_LOADING');
        const response = await api.get(`base/cliente/${id}`);
        response.data.data.tel_cliente = telFormat(response.data.data.tel_cliente);
        commit('SET_SUCCESS');
        return response.data.data;
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // EXCLUIR
    excluir: async ({ commit }, id) => {
      try {
        await api.delete(`base/cliente/${id}`);
        commit('SET_SUCCESS');
      } catch (error) {
        commit('SET_ERROR');
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
