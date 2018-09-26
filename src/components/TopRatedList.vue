<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <h1 class="display-1 mb-5 mt-5 text-xs-center page-title">Top rated movies</h1>
        <v-layout row wrap >
          <movie-card v-for="movie of getTopRatedMovies"
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
      this.$store.dispatch('getTopRatedMoviesFromAPI')
    },
    computed: {
      getTopRatedMovies () {
        return this.$store.getters.getTopRatedMovies
      }
    }
  }
</script>

<style>
  .page-title {
    width: 100%;
  }
</style>
