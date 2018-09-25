import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import movieList from './movieList'
import genres from './genres'
import movieDetails from './movieDetails'
import similarMovies from './similarMovies'
import recomendedMovies from './recomendedMovies'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    shared,
    movieList,
    genres,
    movieDetails,
    similarMovies,
    recomendedMovies
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production'
});

export default store
