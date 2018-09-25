<template>
  <div>
    <h1>СПИКО ИЗБРАННОГО</h1>
    <div v-for="movie of getFavoriteMoviesDetails">
      {{movie.title}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted() {
      this.$store.commit('loadIdsFromLocalStorage', JSON.parse(localStorage.getItem('favoriteMoviesIds')))
      this.$store.dispatch('getFavoriteMoviesIdsFromAPI', this.getFavoriteMoviesIds)
    },
    computed: {
      getFavoriteMoviesIds () {
        return this.$store.getters.getFavoriteMoviesIds
      },
      getFavoriteMoviesDetails () {
        return this.$store.getters.getFavoriteMoviesDetails
      }
    }
  }
</script>

<style>
  .v-btn--floating .v-btn__content {
    height: inherit;
  }

  .v-btn .v-btn__content .v-icon {
    height: inherit;
  }
</style>
