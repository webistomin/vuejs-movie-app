<template>
  <div>
    <v-container grid-list-xl fluid v-if="searchQuery">
      <v-layout row wrap >
        <v-flex xs12 sm6 md3
                v-for="movie of getMoviesList"
                :key="movie.id"
        >
          <v-card color="#35495e" hover style="min-height: 652px"
                  :to="'/movie/' + movie.id">
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
                  @click="isVisible = true"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
                <span>Add to favorite list</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-pagination
            v-model="currentPage"
            :length="getTotalPages"
            dark
            style="width: 100%"
            class="flex-list"
            color="#42b883"
            total-visible="15"
            @input="getMoviesFromAPI"
          ></v-pagination>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {

      }
    },
    computed: {
      searchQuery: {
        get () {
          return this.$store.state.searchQuery
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
          return this.$store.state.currentPage
        },
        set (value) {
          this.$store.commit('updateCurrentPage', value)
        }
      },

    },
    methods: {
      getMoviesFromAPI () {
        this.$router.push('/');
        this.$store.dispatch('getMoviesFromAPI')
      },
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
          return ['none']
        }
      }
    }
  }
</script>

<style scoped>

</style>
