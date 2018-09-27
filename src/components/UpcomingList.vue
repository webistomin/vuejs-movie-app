<template>
  <div>
    <div class="text-xs-center loader" v-if="loading">
      <v-progress-circular
        :size="150"
        :width="10"
        color="#42b883"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-else grid-list-xl fluid>
      <v-layout row wrap >
        <h1 class="display-1 mb-5 mt-5 text-xs-center page-title">Upcoming movies</h1>
        <v-layout row wrap >
          <movie-card v-for="movie of getUpcomingMovies"
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
      this.$store.commit('updateLoadingState', true)
      this.$store.dispatch('getUpcomingMoviesFromAPI')
    },
    computed: {
      getUpcomingMovies () {
        return this.$store.getters.getUpcomingMovies
      },
      loading() {
        return this.$store.getters.getLoadingState
      },
    }
  }
</script>

<style>
  .page-title {
    width: 100%;
  }

  .container.grid-list-xl .layout:not(:only-child) {
    margin: auto;
  }
</style>
