<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <h1 class="display-1 mb-5">Upcoming movies</h1>
        <v-layout row wrap >
          <v-flex xs12 sm6 md3
                  v-for="movie of getUpcomingMovies"
                  :key="movie.id"
          >
            <v-card color="#35495e" hover style="min-height: 652px" :to="'/movie/' + movie.id">
              <v-img
                :src="movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"
                style="height: 500px"
              >
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h2 class="subheading">{{movie.title}}</h2>
                  <div>
                    <v-chip class="caption" label v-for="genre of getCurrentGenres(movie.genre_ids)" :key="genre.id">{{genre}}</v-chip>
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
</template>

<script>
  export default {
    data () {
      return {
        isVisible: false
      }
    },
    mounted() {
      this.$store.dispatch('getUpcomingMoviesFromAPI')
    },
    computed: {
      getUpcomingMovies () {
        return this.$store.getters.getUpcomingMovies
      }
    },
    methods: {
      getCurrentGenres (arrayOfGenreIds) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;

        for (let j = 0; j < arrayOfGenreIds.length; j++) {
          for (let i = 0; i < genresList.length; i++) {
            if (arrayOfGenreIds[j] === genresList[i].id) {
              result.push(genresList[i].name)
            }
          }
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
        }
      },
      addToFavorite (event) {
        this.isVisible = true;
      }
    }
  }
</script>

<style scoped>

</style>
