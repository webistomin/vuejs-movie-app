<template>
  <div>
    <div class="text-xs-center" v-if="loading">
      <v-progress-circular
        :size="170"
        :width="7"
        color="#42b883"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-img
        :src="getMovieDetails.backdrop_path ? `http://image.tmdb.org/t/p/original/${getMovieDetails.backdrop_path}` : `https://cdn.vuetifyjs.com/images/parallax/material.jpg`"
        height="300"
        style="background-position: center">
      </v-img>
      <h1>{{movieId}} ID фильма</h1>
      <p>{{getMovieDetails.original_title}}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        movieId: this.$route.params.id,
        loading: false
      }
    },
    mounted() {
      this.loading = true;
      axios
        .get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.$store.state.personalAPIKey}&language=en-US`)
        .then((response) => {
          this.$store.commit('saveDetails', response.data)
          this.loading = false;
        })
        .catch(error => console.log(error))
    },
    computed: {
      getMovieDetails() {
        this.loading = false;
        return this.$store.getters.getMovieDetails
      }
    }
  }
</script>

<style scoped>

</style>
