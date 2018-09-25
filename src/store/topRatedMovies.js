import axios from 'axios'

export default {
  state: {
    TopRatedMovies: []
  },
  mutations: {
    saveTopRatedMovies (state, payload) {
      state.TopRatedMovies = payload
    }
  },
  actions: {
    getTopRatedMoviesFromAPI ({commit, rootState}) {
      axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${rootState.shared.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          commit('saveTopRatedMovies', response.data);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getTopRatedMovies (state) {
      return state.TopRatedMovies.results
    }
  }
}
