import { api, router } from '../../../config';
import  { navigate, brlFormat } from '../../../util';

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
        const response = await api.get('base/produto', { params });
        response.data.data.forEach((item) => {
          item.val_produto = brlFormat(item.val_produto);
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
        const response = await api.post('base/produto', data);
        console.log(response.errors)
        commit('SET_SUCCESS');
        navigate(router.produto.fullPath);
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response.data);
      }
    },

    // ATUALIZAR
    atualizar: async ({ commit }, data) => {
      try {
        commit('SET_LOADING');
        const response = await api.put(`base/produto/${data._id}`, data);
        commit('SET_SUCCESS');
        return response;
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // EXIBIR
    exibir: async ({ commit }, id) => {
      try {
        commit('SET_LOADING');
        const response = await api.get(`base/produto/${id}`);
        commit('SET_SUCCESS');
        return response;
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // EXCLUIR
    excluir: async ({ commit }, id) => {
      try {
          const response = await api.delete(`base/produto/${id}`);
          commit('SET_SUCCESS');
          return response;
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
