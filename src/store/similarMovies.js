import axios from 'axios'

export default {
  state: {
    similarMovies: [],
  },
  mutations: {
    saveSimilarMovies (state, payload) {
      state.similarMovies = payload;
    }
  },
  actions: {
    async getSimilarMoviesFromAPI ({commit, rootState}) {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${rootState.movieDetails.movieId}/similar?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('saveSimilarMovies', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getSimilarMovies (state) {
      return state.similarMovies.results;
    }
  }
}
