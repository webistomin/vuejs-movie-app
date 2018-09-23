<template>
  <div>
    <div class="text-xs-center mt-5" v-if="loading">
      <v-progress-circular
        :size="150"
        :width="10"
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
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-chip color="warning headline chip mb-3" text-color="white" disabled>
              <v-avatar>
                <v-icon medium>thumb_up</v-icon>
              </v-avatar>
              {{getMovieDetails.vote_average}}
            </v-chip>
            <h1 class="display-2 mb-3">{{getMovieDetails.original_title}}</h1>
            <p class="headline mb-3">{{getMovieDetails.overview}}</p>
            <v-chip class="body-2 mb-3" label v-for="genre of getCurrentGenres(getMovieDetails.genres)" :key="genre.id">{{genre}}</v-chip>
            <div class="block mb-2">
              <span class="headline mb-3 option headline ">Budget:</span>
              <span class="value headline">{{getMovieDetails.budget}}$</span>
            </div>
            <div class="block mb-2">
              <span class="headline mb-3 option headline">Production country:</span>
              <span class="value headline">{{getMovieDetails.production_countries[0].name}}</span>
            </div>
            <div class="block mb-2">
              <span class="headline mb-3 option headline">Release date:</span>
              <span class="value headline">{{getMovieDetails.release_date}}</span>
            </div>
            <div class="block mb-2">
              <span class="headline mb-3 option headline">Runtime:</span>
              <span class="value headline">{{getMovieDetails.runtime}} minutes</span>
            </div>

          </v-flex>
        </v-layout>
      </v-container>


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
    },
    methods: {
      getCurrentGenres (arrayOfGenreIds) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;

        for (let j = 0; j < arrayOfGenreIds.length; j++) {
          for (let i = 0; i < genresList.length; i++) {
            if (arrayOfGenreIds[j].id === genresList[i].id) {
              result.push(genresList[i].name)
            }
          }
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['none']
        }
      }
    }
  }
</script>

<style scoped>
  .chip {
    display: flex;
    justify-content: center;
    width: 120px;
    min-height: 50px;
  }

  .option {
    text-transform: uppercase;
    font-weight: 700;
    color: #ffc107;
  }
</style>
