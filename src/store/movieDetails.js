import axios from 'axios';

export default {
  state: {
    movieDetails: [],
    movieImages: [],
    movieCredits: [],
    movieId: null,
  },
  mutations: {
    saveMovieId (state, payload) {
      state.movieId = payload;
    },
    saveDetails (state, payload) {
      state.movieDetails = payload;
    },
    saveMovieImages (state, payload) {
      state.movieImages = payload;
    },
    saveMovieCredits (state, payload) {
      state.movieCredits = payload;
    }
  },
  actions: {
    async getMovieDetailsFromAPI ({commit, rootState, state}) {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${state.movieId}?api_key=${rootState.shared.personalAPIKey}&language=en-US`)
        .then((response) => {
          commit('saveDetails', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
      await axios
        .get(`https://api.themoviedb.org/3/movie/${state.movieId}/images?api_key=${rootState.shared.personalAPIKey}&language=en-US&include_image_language=en%2Cnull`)
        .then((response) => {
          commit('saveMovieImages', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
      await axios
        .get(`https://api.themoviedb.org/3/movie/${state.movieId}/credits?api_key=${rootState.shared.personalAPIKey}`)
        .then((response) => {
          commit('saveMovieCredits', response.data);
        })
        .catch(error => {
          commit('setErrorMessage', error.message);
          commit('setErrorVisibility', true);
          throw error
        });
    }
  },
  getters: {
    getMovieDetails (state) {
      return state.movieDetails;
    },
    getMovieImages (state) {
      return state.movieImages.backdrops;
    },
    getMovieCredits (state) {
      return state.movieCredits;
    }
  }
}
