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
        class="movie-backdrop">
        <div class="movie-tagline display-3">"{{getMovieDetails.tagline}}"</div>
      </v-img>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-chip color="warning headline chip mb-3" text-color="white" disabled>
                <v-icon medium left>thumb_up</v-icon>
              {{getMovieDetails.vote_average}}
            </v-chip>
            <h1 class="display-2 mb-3">{{getMovieDetails.title}}</h1>
            <p class="headline mb-3">{{getMovieDetails.overview}}</p>
            <v-chip class="title mb-3" label
                    v-for="genre of getCurrentGenres(getMovieDetails.genres)"
                    :key="genre.id">{{genre}}
            </v-chip>
            <div class="headline block mb-2">
              <span class="mb-3 option">Status:</span>
              <span class="value">{{getMovieDetails.status}}</span>
            </div>
            <div class="headline block mb-2">
              <span class="mb-3 option">Budget:</span>
              <span class="value">{{getMovieDetails.budget}}$</span>
            </div>
            <div class="headline block mb-2">
              <span class="mb-3 option">Revenue:</span>
              <span class="value">{{getMovieDetails.revenue}}$</span>
            </div>
            <div class="headline block mb-2">
              <span class="mb-3 option">Production country:</span>
              <span class="value ">{{getMovieDetails.production_countries[0].name}}</span>
            </div>
            <div class="headline block mb-2">
              <span class="mb-3 option">Release date:</span>
              <span class="value">{{getMovieDetails.release_date}}</span>
            </div>
            <div class="headline block mb-2">
              <span class="mb-3 option">Runtime:</span>
              <span class="value">{{getMovieDetails.runtime}} minutes</span>
            </div>
            <h2 class="display-1 mt-5">Similar movies</h2>
          </v-flex>
        </v-layout>
      </v-container>


    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import genres from "../store/genres";

  export default {
    data() {
      return {
        movieId: this.$route.params.id,
      }
    },
    mounted() {
      this.$store.dispatch('getAllGenresFromAPI')
      this.$store.commit('saveMovieId', this.movieId);
      this.$store.dispatch('getMovieDetailsFromAPI');
    },
    computed: {
      getMovieDetails() {
        return this.$store.getters.getMovieDetails
      },
      loading() {
        return this.$store.getters.getLoadingState
      }
    },
    methods: {
      getCurrentGenres (arrayOfGenres) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;

        try {
          for (let i = 0; i < arrayOfGenres.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
              if (arrayOfGenres[i].id === genresList[j].id) {
                result.push(genresList[j].name)
              }
            }
          }
        } catch (error) {
          return {}
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
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

  .movie-backdrop {
    position: relative;
  }

  .movie-tagline {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
