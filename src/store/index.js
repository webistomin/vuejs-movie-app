import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import movieList from './movieList'
import genres from './genres'
import movieDetails from './movieDetails'
import similarMovies from './similarMovies'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shared,
    movieList,
    genres,
    movieDetails,
    similarMovies
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production'
})
