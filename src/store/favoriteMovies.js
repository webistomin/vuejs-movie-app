import axios from "axios";

export default {
  state: {
    favoriteMoviesIds: [],
    favoriteMoviesDetails: [],
  },
  mutations: {
    addToFavoriteMoviesIdsList(state, payload) {
      state.favoriteMoviesIds.push(payload);
      localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds));
    },
    removeFromFavoriteMoviesIdsList(state, payload) {
      let index = state.favoriteMoviesIds.indexOf(payload);
      state.favoriteMoviesIds.splice(index, 1);
      localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds));
    },
    loadIdsFromLocalStorage(state) {
      state.favoriteMoviesIds = JSON.parse(localStorage.getItem('favoriteMoviesIds')) || [];
    },
    saveFavoriteMoviesDetails(state, payload) {
      state.favoriteMoviesDetails.push(payload);
    },
    clearMovieDetails(state, payload) {
      state.favoriteMoviesDetails = payload;
    }
  },
  actions: {
    async getFavoriteMoviesIdsFromAPI({commit, rootState, state}) {
      commit('clearMovieDetails', []);
      if (state.favoriteMoviesIds.length !== 0) {
        let arrayOfIds = String(state.favoriteMoviesIds).split(',');
        for (let i = 0; i < arrayOfIds.length; i++) {
          await axios
            .get(`https://api.themoviedb.org/3/movie/${arrayOfIds[i]}?api_key=${rootState.shared.personalAPIKey}&language=en-US`)
            .then((response) => {
              commit('updateLoadingState', false);
              commit('saveFavoriteMoviesDetails', response.data);
            })
            .catch(error => {
              commit('setErrorMessage', error.message);
              commit('setErrorVisibility', true);
              throw error
            });
        }
      }

    }
  },
  getters: {
    getFavoriteMoviesIds(state) {
      return state.favoriteMoviesIds;
    },
    getFavoriteMoviesDetails(state) {
      return state.favoriteMoviesDetails;
    }
  }
}
