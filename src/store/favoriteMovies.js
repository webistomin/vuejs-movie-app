import axios from "axios";

export default {
  state: {
    favoriteMoviesIds: [],
    favoriteMoviesDetails: []
  },
  mutations: {
    addToFavoriteMoviesIdsList(state, payload) {
      state.favoriteMoviesIds.push(payload)
      localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds));
    },
    removeFromFavoriteMoviesIdsList(state, payload) {
      let index = state.favoriteMoviesIds.indexOf(payload);
      state.favoriteMoviesIds.splice(index, 1);
      localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds));
    },
    loadIdsFromLocalStorage (state, payload) {
      state.favoriteMoviesIds.push(payload)
    },
    saveFavoriteMoviesDetails (state, payload) {
      state.favoriteMoviesDetails.push(payload)
    },
  },
  actions: {
    async getFavoriteMoviesIdsFromAPI({commit, rootState}, payload) {
      let arrayOfIds = String(payload).split(',');
      for (let i = 0; i < arrayOfIds.length; i++) {
        console.log(arrayOfIds[i]);
        await axios
          .get(`https://api.themoviedb.org/3/movie/${arrayOfIds[i]}?api_key=${rootState.shared.personalAPIKey}&language=en-US`)
          .then((response) => commit('saveFavoriteMoviesDetails', response.data))
          .catch(error => console.log(error));
      }
    }
  },
  getters: {
    getFavoriteMoviesIds (state) {
      return state.favoriteMoviesIds
    },
    getFavoriteMoviesDetails (state) {
      return state.favoriteMoviesDetails
    }
  }
}
