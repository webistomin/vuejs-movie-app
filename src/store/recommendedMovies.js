import axios from 'axios';

export default {
  state: {
    RecommendedMovies: [],
  },
  mutations: {
    saveRecommendedMovies(state, payload) {
      state.RecommendedMovies = payload;
    }
  },
  actions: {
    async getRecommendedMoviesFromAPI({commit, rootState}) {
     await axios
        .get(`https://api.themoviedb.org/3/movie/${rootState.movieDetails.movieId}/recommendations?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('saveRecommendedMovies', response.data);
        })
       .catch(error => {
         commit('setErrorMessage', error.message);
         commit('setErrorVisibility', true);
         throw error
       });
    }
  },
  getters: {
    getRecommendedMovies(state) {
      return state.RecommendedMovies.results;
    }
  }
}
