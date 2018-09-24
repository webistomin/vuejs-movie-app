export default {
  state: {
    genres: [],
  },
  mutations: {
    saveGenres(state, payload) {
      state.genres = payload
    },
  },
  actions: {

  },
  getters: {
    getGenresList (state) {
      return state.genres;
    },
  }
}
