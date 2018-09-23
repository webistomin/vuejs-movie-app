import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalAPIKey: '52217232f795bbefbb1b7c951aae98ad',
    searchQuery: '',
    movies: [],
    genres: [],
    currentPage: 1,
  },
  mutations: {
    updateQuery (state, payload) {
      state.searchQuery = payload;
    },

    saveMovies(state, payload) {
      state.movies = payload;
    },

    saveGenres(state, payload) {
      state.genres = payload
    },

    updateCurrentPage (state, payload) {
      state.currentPage = payload;
    }
  },
  actions: {
    getMoviesFromAPI ({ commit, state }) {
      if (state.searchQuery) {
        const encodedSearchQuery = encodeURI(state.searchQuery);
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.personalAPIKey}&language=en-US&query=${encodedSearchQuery}&page=${state.currentPage}&include_adult=true`)
          .then((response) => commit('saveMovies', response.data))
          .catch(error => console.log(error));
      }
      }
  },
  getters: {
    getMoviesList (state) {
      return state.movies;
    },

    getGenresList (state) {
      return state.genres;
    },

    getTotalPages (state) {
      return state.movies.total_pages
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
