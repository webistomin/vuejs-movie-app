export default {
  state: {
    similarMovies: []
  },
  mutations: {
    saveSimilarMovies (state, payload) {
      state.similarMovies = payload
    }
  },
  actions: {

  },
  getters: {
    getSimilarMovies (state) {
      return state.similarMovies
    }
  }
}
