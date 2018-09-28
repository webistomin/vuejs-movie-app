<template>
  <div>
    <div class="text-xs-center loader" v-if="isLoading">
      <v-progress-circular
        :size="150"
        :width="10"
        color="#42b883"
        indeterminate>
      </v-progress-circular>
    </div>
    <div v-else>
      <v-img
        :src="getMovieDetails.backdrop_path ? `http://image.tmdb.org/t/p/${getBackdropSize}/${getMovieDetails.backdrop_path}` : `https://cdn.vuetifyjs.com/images/parallax/material.jpg`"
        height="300"
        class="movie-backdrop">
        <div v-if="getMovieDetails.tagline"
             class="movie-tagline display-3">
          "{{getMovieDetails.tagline}}"
        </div>
      </v-img>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-chip color="warning headline chip mb-3" text-color="white" disabled>
              <v-icon medium left>thumb_up</v-icon>
              {{getMovieDetails.vote_average}}
            </v-chip>
            <h1 class="display-2 mb-3"
                v-if="getMovieDetails.title">
              {{getMovieDetails.title}}
            </h1>
            <p class="headline mb-3"
               v-if="getMovieDetails.overview">
              {{getMovieDetails.overview}}
            </p>
            <div v-if="getMovieDetails.genres !== undefined">
              <v-chip class="title mb-3"
                      label
                      v-for="genre of getCurrentGenres(getMovieDetails.genres)"
                      :key="genre.id">
                {{genre}}
              </v-chip>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.status">
              <span class="mb-3 option">Status:</span>
              <span class="value">{{getMovieDetails.status}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.budget">
              <span class="mb-3 option">Budget:</span>
              <span class="value">${{getMovieDetails.budget | getFormatedPrice}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.revenue">
              <span class="mb-3 option">Revenue:</span>
              <span class="value">${{getMovieDetails.revenue | getFormatedPrice}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.release_date">
              <span class="mb-3 option">Release date:</span>
              <span class="value">{{getMovieDetails.release_date}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.runtime">
              <span class="mb-3 option">Runtime:</span>
              <span class="value">{{getMovieDetails.runtime}} minutes</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.production_countries.length !== 0">
              <span class="mb-3 option">Production country:</span>
              <span class="value ">{{getMovieDetails.production_countries[0].name}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.popularity">
              <span class="mb-3 option">Popularity:</span>
              <span class="value ">{{getMovieDetails.popularity}}</span>
            </div>
            <div class="title block mb-3"
                 v-if="getMovieDetails.spoken_languages.length !== 0">
              <span class="mb-3 option">Spoken languages:</span>
              <span class="value ">{{getMovieDetails.spoken_languages[0].name}}</span>
            </div>
            <v-container grid-list-xl fluid
                         v-if="getMovieImages.length > 1">
              <v-layout row wrap>
                <v-carousel cycle
                            interval="5000">
                  <v-carousel-item
                    v-for="img in getMovieImages"
                    :key="img.file_path"
                    :src="img.file_path ? `http://image.tmdb.org/t/p/${getCarouselImageSize}/${img.file_path}` : `https://cdn.vuetifyjs.com/images/parallax/material.jpg`">
                  </v-carousel-item>
                </v-carousel>
              </v-layout>
            </v-container>
            <v-container grid-list-xl fluid
                         v-if="getSimilarMovies.length !== 0">
              <h2 class="display-1 mt-5">Similar movies</h2>
              <v-layout row wrap>
                <movie-card v-for="movie of getSimilarMovies.slice(0,4)"
                            :key="movie.id"
                            :itemName="movie">
                </movie-card>
              </v-layout>
            </v-container>
            <v-container grid-list-xl fluid
                         v-if="getRecommendedMovies.length !== 0">
              <h2 class="display-1 mt-5">Recommended movies</h2>
              <v-layout row wrap>
                <movie-card v-for="movie of getRecommendedMovies.slice(0,4)"
                            :key="movie.id"
                            :itemName="movie">
                </movie-card>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <error-message></error-message>
  </div>
</template>

<script>
  import store from '../store/index'
  import MovieCard from './MovieCard'
  import ErrorMessage from './ErrorMessage'

  export default {
    components: {
      MovieCard,
      ErrorMessage
    },
    beforeRouteEnter(to, from, next) {
      store.commit('updateLoadingState', true)
      store.commit('saveMovieId', to.params.id)
      store.dispatch('getMovieDetailsFromAPI')
        .then(() => {
          store.dispatch('getSimilarMoviesFromAPI')
            .then(() => {
              store.dispatch('getRecommendedMoviesFromAPI')
                .then(() => {
                  store.commit('updateLoadingState', false)
                })
            })
        })
      next()
    },
    beforeRouteUpdate(to, from, next) {
      this.$store.commit('updateLoadingState', true)
      this.$store.commit('saveMovieId', to.params.id)
      this.$store.dispatch('getMovieDetailsFromAPI')
        .then(() => {
          this.$store.dispatch('getSimilarMoviesFromAPI')
            .then(() => {
              this.$store.dispatch('getRecommendedMoviesFromAPI')
                .then(() => {
                  this.$store.commit('updateLoadingState', false)
                })
            })
        })
      next()
    },
    computed: {
      getMovieDetails() {
        return this.$store.getters.getMovieDetails
      },
      isLoading() {
        return this.$store.getters.getLoadingState
      },
      getSimilarMovies() {
        return this.$store.getters.getSimilarMovies
      },
      getRecommendedMovies() {
        return this.$store.getters.getRecommendedMovies
      },
      getMovieImages () {
        return this.$store.getters.getMovieImages
      },
      getBackdropSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 'w300'
          case 'sm':
            return 'w300'
          case 'md':
            return 'w780'
          case 'lg':
            return 'w1280'
          case 'xl':
            return 'w1280'
        }
      },
      getCarouselImageSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 'w300'
          case 'sm':
            return 'w780'
          case 'md':
            return 'w780'
          case 'lg':
            return 'w1280'
          case 'xl':
            return 'w1280'
        }
      }
    },
    filters: {
      getFormatedPrice(value) {
        return Math.abs(Number(value)) >= 1.0e+9
          ? Math.round(Math.abs(Number(value)) / 1.0e+9 ) + " Billions"
          // Six Zeroes for Millions
          : Math.abs(Number(value)) >= 1.0e+6
            ? Math.round(Math.abs(Number(value)) / 1.0e+6 ) + " Millions"
            // Three Zeroes for Thousands
            : Math.abs(Number(value)) >= 1.0e+3
              ? Math.round(Math.abs(Number(value)) / 1.0e+3 ) + " Thousands"
              : Math.abs(Number(value));
      }
    },
    methods: {
      getCurrentGenres(arrayOfGenres) {
        const result = []
        const genresList = this.$store.getters.getGenresList.genres

        try {
          for (let i = 0; i < arrayOfGenres.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
              if (arrayOfGenres[i].id === genresList[j].id) {
                result.push(genresList[j].name)
              }
            }
          }
        } catch (error) {
          console.log(error)
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
        }
      },
    },
  }
</script>

<style>
  .chip {
    display: flex;
    justify-content: center;
    width: 120px;
    min-height: 50px;
  }

  .v-responsive {
    max-width: 100%;
  }

  .option {
    text-transform: uppercase;
    font-weight: 700;
    color: #ffc107;
  }

  .movie-backdrop {
    position: relative;
    background: radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%);
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

  .loader {
    margin-top: 100px;
  }

  .container.grid-list-xl .layout:not(:only-child) {
    margin: auto;
  }


</style>
