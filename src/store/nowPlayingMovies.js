import axios from 'axios'

export default {
  state: {
    NowPlayingMovies: [],
  },
  mutations: {
    saveNowPlayingMovies (state, payload) {
      state.NowPlayingMovies = payload;
    }
  },
  actions: {
    getNowPlayingMoviesFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('updateLoadingState', false);
          commit('saveNowPlayingMovies', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getNowPlayingMovies (state) {
      return state.NowPlayingMovies.results;
    }
  }
}
