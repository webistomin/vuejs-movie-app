import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalAPIKey: '52217232f795bbefbb1b7c951aae98ad',
    searchQuery: '',
    movies: []
  },
  mutations: {
    updateQuery (state, payload) {
      state.searchQuery = payload
    },

    saveMovies(state) {
      const encodedSearchQuery = encodeURI(state.searchQuery);

      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.personalAPIKey}&language=en-US&query=${encodedSearchQuery}&page=1&include_adult=false`)
        .then(response => (state.movies = response))
        .catch(error => console.log(error));
    }
  },
  actions: {
    loadMovies (context) {
      context.commit('saveMovies')
    }
  },
  getters: {
    getMoviesList (state) {
      return state.movies.data.results
    }
  }
})
