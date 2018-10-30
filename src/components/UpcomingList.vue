<template>
  <div>
    <div class="text-xs-center loader" v-if="isLoading">
      <v-progress-circular
        :size="150"
        :width="10"
        color="#42b883"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-else grid-list-xl fluid>
      <v-layout row wrap >
        <h1 class="page-title" :class="[getTitleFontSize, getTitleMargin]">Upcoming movies</h1>
        <v-layout row wrap >
          <movie-card v-for="movie of getUpcomingMovies"
                      :key="movie.id"
                      :itemName="movie">
          </movie-card>
        </v-layout>
      </v-layout>
    </v-container>
    <error-message></error-message>
  </div>
</template>

<script>
  import MovieCard from './MovieCard';
  import ErrorMessage from './ErrorMessage';

  export default {
    components: {
      MovieCard,
      ErrorMessage,
    },
    mounted() {
      this.$store.commit('updateLoadingState', true);
      this.$store.dispatch('getUpcomingMoviesFromAPI');
    },
    computed: {
      getUpcomingMovies () {
        return this.$store.getters.getUpcomingMovies;
      },
      isLoading() {
        return this.$store.getters.getLoadingState;
      },
      getTitleFontSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'subheading';
          case 'sm': return 'title';
          case 'md': return 'headline';
          case 'lg': return 'display-1';
          case 'xl': return 'display-2';
        }
      },
      getTitleMargin () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'mt-1 mb-1';
          case 'sm': return 'mt-2 mb-2';
          case 'md': return 'mt-3 mb-3';
          case 'lg': return 'mt-4 mb-4';
          case 'xl': return 'mt-5 mb-5';
        }
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
