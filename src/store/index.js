import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import movieList from './movieList'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    movieList
  },
  state: {
    genres: [],
    favoriteMovies: [],
    movieDetails: [],
    similarMovies: []
  },
  mutations: {


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

  },
  getters: {


    getGenresList (state) {
      return state.genres;
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
