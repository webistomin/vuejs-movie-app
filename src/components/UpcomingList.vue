<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap >
        <h1>Upcoming movies</h1>
        <v-layout row wrap >
          <v-flex xs12 sm6 md3
                  v-for="movie of getMoviesList"
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
      </v-layout>
    </v-container>

  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
