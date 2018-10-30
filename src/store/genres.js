import axios from 'axios'

export default {
  state: {
    genres: [],
  },
  mutations: {
    saveGenres(state, payload) {
      state.genres = payload;
    },
  },
  actions: {
    getAllGenresFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${rootState.shared.personalAPIKey}&language=en-US`)
        .then((response) => commit('saveGenres', response.data))
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getGenresList (state) {
      return state.genres;
    },
  }
}
