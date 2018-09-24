export default {
  state: {
    personalAPIKey: '52217232f795bbefbb1b7c951aae98ad',
    currentPage: 1,
    searchQuery: '',
    loading: false
  },
  mutations: {
    updateQuery (state, payload) {
      state.searchQuery = payload;
    },
    updateCurrentPage (state, payload) {
      state.currentPage = payload;
    },

  },
  actions: {},
  getters: {}
}
