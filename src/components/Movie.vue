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
            <v-chip class="title mb-3" label v-for="genre of getCurrentGenres(getMovieDetails.genres)" :key="genre.id">{{genre}}</v-chip>
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
            <!--<v-flex xs12 sm6 md3 mt-5-->
                    <!--v-for="similar of getSimilarMovies.slice(0,4)"-->
                    <!--:key=similar.id>-->
              <!--<v-card color="#35495e" hover style="min-height: 652px" :to="'/movie/' + similar.id">-->
                <!--<v-img-->
                  <!--:src="similar.poster_path ? `http://image.tmdb.org/t/p/w500/${similar.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"-->
                  <!--style="height: 500px"-->
                <!--&gt;-->
                <!--</v-img>-->
                <!--<v-card-title primary-title>-->
                  <!--<div>-->
                    <!--<h2 class="subheading">{{similar.title}}</h2>-->
                    <!--<div>-->
                      <!--<v-chip class="caption" label v-for="genre of getCurrentGenres(movie.genre_ids)" :key="genre.id">{{genre}}</v-chip>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</v-card-title>-->
                <!--<v-card-actions>-->
                  <!--<v-tooltip right>-->
                    <!--<v-btn-->
                      <!--slot="activator"-->
                      <!--flat-->
                      <!--fab-->
                      <!--icon-->
                      <!--color="#42b883"-->
                      <!--tag="button"-->
                      <!--@click.prevent="addToFavorite"-->
                    <!--&gt;-->
                      <!--<v-icon ref="iconHeart">favorite_border</v-icon>-->
                    <!--</v-btn>-->
                    <!--<span>Add to favorite list</span>-->
                  <!--</v-tooltip>-->
                <!--</v-card-actions>-->
              <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex xs12 mt-5>-->
              <!--<h2 class="display-1">Recomendations</h2>-->
              <!--<ul>-->
                <!--<li v-for="similar of getSimilarMovies.slice(0,4)">{{similar.title}}</li>-->
              <!--</ul>-->
            <!--</v-flex>-->
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
        })
        .catch(error => console.log(error))
      axios
        .get(`https://api.themoviedb.org/3/movie/${this.movieId}/similar?api_key=${this.$store.state.personalAPIKey}&language=en-US&page=1`)
        .then((response) => {
          this.$store.commit('saveSimilarMovies', response.data)
          this.loading = false;
        })
        .catch(error => console.log(error))
    },
    computed: {
      getMovieDetails() {
        console.log('Меня вызвали')
        this.loading = false;
        return this.$store.getters.getMovieDetails
      },

      getSimilarMovies() {
        this.loading = false;
        return this.$store.getters.getSimilarMovies.results
      }
    },
    methods: {
      getCurrentGenres (arrayOfGenres) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;

        for (let j = 0; j < arrayOfGenres.length; j++) {
          for (let i = 0; i < genresList.length; i++) {
            if (arrayOfGenres[j].id === genresList[i].id) {
              result.push(genresList[i].name)
            }
          }
        }
        if (result.length !== 0) {
          console.log(result)
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
