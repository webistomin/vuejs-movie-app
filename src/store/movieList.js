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
    getMoviesFromAPI ({ commit, state }) {
      if (state.shared.searchQuery) {
        const encodedSearchQuery = encodeURI(state.shared.searchQuery);
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.shared.personalAPIKey}&language=en-US&query=${encodedSearchQuery}&page=${state.shared.currentPage}&include_adult=false`)
          .then((response) => commit('saveMovies', response.data))
          .catch(error => console.log(error));
      }
    }
  },
  getters: {
    getMoviesList (state) {
      return state.movies;
    },
    getTotalPages (state) {
      return state.movies.total_pages
    },
  }
}
