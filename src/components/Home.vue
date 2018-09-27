<template>
  <div>
    <v-container grid-list-xl fluid v-if="!searchQuery">
      <h1 class="page-title" :class="[getTitleFontSize, getTitleMargin]">Popular movies</h1>
      <v-layout row wrap >
        <movie-card v-for="movie of getPopularMovies"
                  :key="movie.id"
                  :itemName="movie">
        </movie-card>
      </v-layout>
    </v-container>
    <v-container grid-list-xl fluid v-else>
      <v-layout row wrap >
        <movie-card v-for="movie of getMoviesList"
              :key="movie.id"
              :itemName="movie">
        </movie-card>
        <v-flex xs12>
          <v-pagination
            v-model="currentPage"
            :length="getTotalPages"
            dark
            style="width: 100%"
            class="flex-list"
            color="#42b883"
            total-visible="5"
            @input="getMoviesFromAPI"
          ></v-pagination>
        </v-flex>
      </v-layout>
    </v-container>
    <error-message></error-message>
  </div>

</template>

<script>
  import MovieCard from './MovieCard'
  import ErrorMessage from './ErrorMessage'

  export default {
    components: {
      MovieCard,
      ErrorMessage
    },
    mounted() {
      this.$store.dispatch('getPopularMoviesFromAPI')
    },
    computed: {
      searchQuery: {
        get () {
          return this.$store.state.shared.searchQuery
        },
        set (value) {
          this.$store.commit('updateCurrentPage', 1);
          this.$store.commit('updateQuery', value);
        }
      },
      getMoviesList () {
        return this.$store.getters.getMoviesList.results
      },
      getTotalPages () {
        return this.$store.getters.getTotalPages
      },
      currentPage: {
        get () {
          return this.$store.state.shared.currentPage
        },
        set (value) {
          this.$store.commit('updateCurrentPage', value)
        }
      },
      getPopularMovies () {
        return this.$store.getters.getPopularMovies
      },
      getTitleFontSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'subheading'
          case 'sm': return 'title'
          case 'md': return 'headline'
          case 'lg': return 'display-1'
          case 'xl': return 'display-2'
        }
      },
      getTitleMargin () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'mt-1 mb-1'
          case 'sm': return 'mt-2 mb-2'
          case 'md': return 'mt-3 mb-3'
          case 'lg': return 'mt-3 mb-4'
          case 'xl': return 'mt-5 mb-5'
        }
      }
    },
    methods: {
      getMoviesFromAPI () {
        this.$router.push('/');
        this.$store.dispatch('getMoviesFromAPI')
      },
    }
  }
</script>

<style>
  .page-title {
    width: 100%;
    text-transform: uppercase;
    text-align: center;
  }

  .container.grid-list-xl .layout:not(:only-child) {
    margin: auto;
  }
</style>
