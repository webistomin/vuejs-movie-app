import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
  },
  state: {
    movies: [],
    genres: [],
    favoriteMovies: [],
    movieDetails: [],
    similarMovies: []
  },
  mutations: {
    saveMovies(state, payload) {
      state.movies = payload;
    },

    saveGenres(state, payload) {
      state.genres = payload
    },

    saveDetails (state, payload) {
      state.movieDetails = payload
    },

    saveSimilarMovies (state, payload) {
      state.similarMovies = payload
    }
  },
  actions: {
    getMoviesFromAPI ({ commit, state }) {
      if (state.shared.searchQuery) {
        const encodedSearchQuery = encodeURI(state.shared.searchQuery);
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.shared.personalAPIKey}&language=en-US&query=${encodedSearchQuery}&page=${state.shared.currentPage}&include_adult=false`)
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
    },

    getMovieDetails (state) {
      return state.movieDetails
    },

    getSimilarMovies (state) {
      return state.similarMovies
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
