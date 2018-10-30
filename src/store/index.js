import Vue from 'vue';
import Vuex from 'vuex';
import shared from './shared';
import movieList from './movieList';
import genres from './genres';
import movieDetails from './movieDetails';
import similarMovies from './similarMovies';
import recommendedMovies from './recommendedMovies';
import popularMovies from './popularMovies';
import upcomingMovies from './upcomingMovies';
import topRatedMovies from './topRatedMovies';
import nowPlayingMovies from './nowPlayingMovies';
import favoriteMovies from './favoriteMovies';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shared,
    movieList,
    genres,
    movieDetails,
    similarMovies,
    recommendedMovies,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
    nowPlayingMovies,
    favoriteMovies,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
});

export default store
