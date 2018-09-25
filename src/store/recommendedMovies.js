import axios from 'axios'

export default {
  state: {
    RecommendedMovies: []
  },
  mutations: {
    saveRecommendedMovies(state, payload) {
      state.RecommendedMovies = payload
    }
  },
  actions: {
    getRecommendedMoviesFromAPI({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${rootState.movieDetails.movieId}/recommendations?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          // Искусственная задержка на время
          setTimeout(() => {
            commit('updateLoadingState', false)
          }, 1000);
          commit('saveRecommendedMovies', response.data);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getRecommendedMovies(state) {
      return state.RecommendedMovies.results
    }
  }
}
