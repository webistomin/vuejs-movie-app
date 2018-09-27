export default {
  state: {
    personalAPIKey: '52217232f795bbefbb1b7c951aae98ad',
    currentPage: 1,
    searchQuery: '',
    isLoading: null
  },
  mutations: {
    updateQuery (state, payload) {
      state.searchQuery = payload;
    },
    updateCurrentPage (state, payload) {
      state.currentPage = payload;
    },
    updateLoadingState (state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {},
  getters: {
    getLoadingState (state) {
      return state.isLoading
    }
  }
}
