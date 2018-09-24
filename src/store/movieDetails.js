import axios from 'axios'

export default {
  state: {
    movieDetails: [],
    movieId: null
  },
  mutations: {
    saveMovieId (state, payload) {
      state.movieId = payload
    },
    saveDetails (state, payload) {
      state.movieDetails = payload
    }
  },
  actions: {
    getMovieDetailsFromAPI ({commit, rootState, state}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${state.movieId}?api_key=${rootState.shared.personalAPIKey}&language=en-US`)
        .then((response) => {
          commit('saveDetails', response.data);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getMovieDetails (state) {
      return state.movieDetails
    },
  }
}
