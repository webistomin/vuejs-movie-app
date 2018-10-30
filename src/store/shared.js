export default {
  state: {
    personalAPIKey: '52217232f795bbefbb1b7c951aae98ad',
    currentPage: 1,
    searchQuery: '',
    isLoading: null,
    errorMessage: null,
    isErrorVisible: false,
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
    },
    setErrorMessage (state, payload) {
      state.errorMessage = payload;
    },
    setErrorVisibility (state, payload) {
      state.isErrorVisible = payload;
    }
  },
  actions: {},
  getters: {
    getLoadingState (state) {
      return state.isLoading;
    },
    getErrorMessage (state) {
      return state.errorMessage;
    },
    getErrorVisibility (state) {
      return state.isErrorVisible;
    }
  }
}
