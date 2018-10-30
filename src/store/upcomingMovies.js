import axios from 'axios'

export default {
  state: {
    UpcomingMovies: []
  },
  mutations: {
    saveUpcomingMovies (state, payload) {
      state.UpcomingMovies = payload
    }
  },
  actions: {
    getUpcomingMoviesFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('updateLoadingState', false);
          commit('saveUpcomingMovies', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getUpcomingMovies (state) {
      return state.UpcomingMovies.results
    }
  }
}
