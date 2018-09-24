import axios from 'axios'

export default {
  state: {
    similarMovies: []
  },
  mutations: {
    saveSimilarMovies (state, payload) {
      state.similarMovies = payload
    }
  },
  actions: {
    getSimilarMoviesFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${rootState.movieDetails.movieId}/similar?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('saveSimilarMovies', response.data);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getSimilarMovies (state) {
      return state.similarMovies.results
    }
  }
}
