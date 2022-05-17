export default {
  setLoading(state, payload) {
    state.commit('SET_LOADING', payload)
  },
  setProgress(state, payload) {
    state.commit('SET_PROGRESS', payload)
  }
}
