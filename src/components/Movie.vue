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
    <div v-else>
      <v-img
        :src="getMovieDetails.backdrop_path ? `http://image.tmdb.org/t/p/original/${getMovieDetails.backdrop_path}` : `https://cdn.vuetifyjs.com/images/parallax/material.jpg`"
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
            <div class="headline block mb-2"
                 v-if="getMovieDetails.status">
              <span class="mb-3 option">Status:</span>
              <span class="value">{{getMovieDetails.status}}</span>
            </div>
            <div class="headline block mb-2"
                 v-if="getMovieDetails.budget">
              <span class="mb-3 option">Budget:</span>
              <span class="value">{{getMovieDetails.budget}}$</span>
            </div>
            <div class="headline block mb-2"
                 v-if="getMovieDetails.revenue">
              <span class="mb-3 option">Revenue:</span>
              <span class="value">{{getMovieDetails.revenue}}$</span>
            </div>
            <div class="headline block mb-2"
                 v-if="getMovieDetails.production_countries[0].name">
              <span class="mb-3 option">Production country:</span>
              <span class="value ">{{getMovieDetails.production_countries[0].name}}</span>
            </div>
            <div class="headline block mb-2"
                 v-if="getMovieDetails.release_date">
              <span class="mb-3 option">Release date:</span>
              <span class="value">{{getMovieDetails.release_date}}</span>
            </div>
            <div class="headline block mb-2"
                 v-if="getMovieDetails.runtime">
              <span class="mb-3 option">Runtime:</span>
              <span class="value">{{getMovieDetails.runtime}} minutes</span>
            </div>
            <v-container grid-list-xl fluid v-if="getMovieImages.length > 1">
              <v-layout row wrap>
                <v-carousel>
                  <v-carousel-item
                    v-for="img in getMovieImages"
                    :key="img.file_path"
                    :src="img.file_path ? `http://image.tmdb.org/t/p/w1280/${img.file_path}` : `https://cdn.vuetifyjs.com/images/parallax/material.jpg`"
                  ></v-carousel-item>
                </v-carousel>
              </v-layout>
            </v-container>
            <v-container grid-list-xl fluid
                         v-if="getSimilarMovies.length !== 0">
              <h2 class="display-1 mt-5">Similar movies</h2>
              <v-layout row wrap>
                <v-flex xs12 sm6 md3
                        v-for="similarMovie of getSimilarMovies.slice(0,4)"
                        :key="similarMovie.id"
                >
                  <v-card color="#35495e" hover style="min-height: 652px" :to="'/movie/' + similarMovie.id">
                    <v-img
                      :src="similarMovie.poster_path ? `http://image.tmdb.org/t/p/w500/${similarMovie.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"
                      style="height: 500px"
                    >
                    </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h2 class="subheading"
                            v-if="similarMovie.title">
                          {{similarMovie.title}}</h2>
                        <div v-if="similarMovie.genre_ids.length !== undefined">
                          <v-chip class="caption"
                                  label
                                  v-for="genre of getCurrentGenresFromNumbers(similarMovie.genre_ids)"
                                  :key="genre.id"
                                  >
                            {{genre}}
                          </v-chip>
                        </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-tooltip right>
                        <v-btn
                          slot="activator"
                          flat
                          fab
                          icon
                          color="#42b883"
                          tag="button"
                          @click.prevent="addToFavorite"
                        >
                          <v-icon ref="iconHeart">favorite_border</v-icon>
                        </v-btn>
                        <span>Add to favorite list</span>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container grid-list-xl fluid v-if="getRecommendedMovies.length !== 0">
              <h2 class="display-1 mt-5">Recommended movies</h2>
              <v-layout row wrap>
                <v-flex xs12 sm6 md3
                        v-for="recomendedMovie of getRecommendedMovies.slice(0,4)"
                        :key="recomendedMovie.id"
                >
                  <v-card color="#35495e" hover style="min-height: 652px" :to="'/movie/' + recomendedMovie.id">
                    <v-img
                      :src="recomendedMovie.poster_path ? `http://image.tmdb.org/t/p/w500/${recomendedMovie.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"
                      style="height: 500px"
                    >
                    </v-img>
                    <v-card-title primary-title>
                      <div>
                        <h2 class="subheading"
                            v-if="recomendedMovie.title">
                          {{recomendedMovie.title}}</h2>
                        <div v-if="recomendedMovie.genre_ids !== undefined">
                          <v-chip class="caption" label v-for="genre of getCurrentGenresFromNumbers(recomendedMovie.genre_ids)" :key="genre.id">
                            {{genre}}
                          </v-chip>
                        </div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-tooltip right>
                        <v-btn
                          slot="activator"
                          flat
                          fab
                          icon
                          color="#42b883"
                          tag="button"
                          @click.prevent="addToFavorite"
                        >
                          <v-icon ref="iconHeart">favorite_border</v-icon>
                        </v-btn>
                        <span>Add to favorite list</span>
                      </v-tooltip>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-model="isVisible"
        color="#42b883"
      >
        Film has successfully added to favorite list
        <v-btn
          dark
          flat
          @click="isVisible = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
  import store from '../store/index'

  export default {
    data() {
      return {
        // movieId: this.$route.params.id,
        isVisible: false
      }
    },
    beforeRouteEnter(to, from, next) {
      store.commit('updateLoadingState', true)
      store.commit('saveMovieId', to.params.id);
      store.dispatch('getMovieDetailsFromAPI');
      store.dispatch('getSimilarMoviesFromAPI');
      store.dispatch('getRecommendedMoviesFromAPI');
      next()
    },
    beforeRouteUpdate(to, from, next) {
      this.$store.commit('saveMovieId', to.params.id);
      this.$store.dispatch('getMovieDetailsFromAPI');
      this.$store.dispatch('getSimilarMoviesFromAPI');
      this.$store.dispatch('getRecommendedMoviesFromAPI');
      next()
    },
    computed: {
      getMovieDetails() {
        return this.$store.getters.getMovieDetails
      },
      loading() {
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
    },
    methods: {
      getCurrentGenres(arrayOfGenres) {
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
          console.log(error)
          return {}
        }


        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
        }
      },
      getCurrentGenresFromNumbers(arrayOfGenres) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;
        // временный косяк
        try {
          for (let i = 0; i < arrayOfGenres.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
              if (arrayOfGenres[i] === genresList[j].id) {
                result.push(genresList[j].name)
              }
            }
          }
        } catch (error) {
          console.log(genresList)
          console.log(result)
          console.log(error)
          return 0
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
        }
      },
      addToFavorite() {
        this.isVisible = true;
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
</style>
