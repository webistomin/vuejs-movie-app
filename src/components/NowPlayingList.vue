<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <h1 class="display-1 mb-5 mt-5 text-xs-center page-title">Now playing movies</h1>
        <v-layout row wrap >
          <movie-card v-for="movie of getNowPlayingMovies"
                      :key="movie.id"
                      :itemName="movie">
          </movie-card>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import MovieCard from './MovieCard'

  export default {
    components: {
      MovieCard,
    },
    mounted() {
      this.$store.dispatch('getNowPlayingMoviesFromAPI')
    },
    computed: {
      getNowPlayingMovies () {
        return this.$store.getters.getNowPlayingMovies
      }
    }
  }
</script>

<style>
  .page-title {
    width: 100%;
  }
</style>
