import axios from 'axios'

export default {
  state: {
    PopularMovies: [],
  },
  mutations: {
    savePopularMovies (state, payload) {
      state.PopularMovies = payload;
    }
  },
  actions: {
    getPopularMoviesFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('savePopularMovies', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getPopularMovies (state) {
      return state.PopularMovies.results;
    }
  }
}
