<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <h1 class="display-1 mb-5 mt-5 text-xs-center page-title">Favorite movies</h1>
        <v-layout row wrap>
          <movie-card v-for="movie of getFavoriteMoviesDetails"
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
    data () {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getFavoriteMoviesIdsFromAPI')
    },
    computed: {
      getFavoriteMoviesIds() {
        return this.$store.getters.getFavoriteMoviesIds
      },
      getFavoriteMoviesDetails() {
        return this.$store.getters.getFavoriteMoviesDetails
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
