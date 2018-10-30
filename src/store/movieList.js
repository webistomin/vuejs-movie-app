import axios from "axios";

export default {
  state: {
    movies: [],
  },
  mutations: {
    saveMovies(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    getMoviesFromAPI ({ commit, rootState}) {
      if (rootState.shared.searchQuery) {
        const encodedSearchQuery = encodeURI(rootState.shared.searchQuery);
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${rootState.shared.personalAPIKey}&language=en-US&query=${encodedSearchQuery}&page=${rootState.shared.currentPage}&include_adult=false`)
          .then((response) => commit('saveMovies', response.data))
          .catch(error => {
            commit('setErrorMessage', error.message);
            commit('setErrorVisibility', true);
            throw error
          });
      }
    }
  },
  getters: {
    getMoviesList (state) {
      return state.movies;
    },
    getTotalPages (state) {
      return state.movies.total_pages;
    },
  }
}
