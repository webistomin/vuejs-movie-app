import axios from 'axios'

export default {
  state: {
    recomendedMovies: []
  },
  mutations: {
    saveRecomendedMovies (state, payload) {
      state.recomendedMovies = payload
    }
  },
  actions: {
    getRecomendedMoviesFromAPI ({commit, rootState}) {

      axios
        .get(`https://api.themoviedb.org/3/movie/${rootState.movieDetails.movieId}/recommendations?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('saveRecomendedMovies', response.data);

        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getRecomendedMovies (state) {
      return state.recomendedMovies.results
    }
  }
}
