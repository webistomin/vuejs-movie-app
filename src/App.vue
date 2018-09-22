<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="pt-5"
    >
      <v-list three-line>
        <v-list-tile @click="" tabindex="0">
          <v-list-tile-action>
            <v-icon large>star_border</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Popular</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon large>trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Top rated</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon large>calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Upcoming</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon large>play_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Now playing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon large>favorite_border</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Favorite</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app fixed clipped-left prominent style="background-color: #42b883">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">TMDb Movie App</v-toolbar-title>
      <v-text-field
        prepend-inner-icon="search"
        solo
        clearable
        hide-details
        single-line
        flat
        color="#42b883"
        autofocus
        placeholder="Search for a movie..."
        class="ml-5"
        v-model.trim="searchQuery"
        @input="getMovies">
      </v-text-field>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl fluid v-if="movies.length !== 0">
        <v-layout row wrap >
          <v-flex xs12 sm6 md3 v-for="movie of movies.data.results" :key="movie.id">
            <v-card color="#35495e" hover style="min-height: 652px">
              <v-img
                :src="'http://image.tmdb.org/t/p/w400/' + movie.poster_path"
                style="height: 500px"
              >
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h2 class="title">{{movie.title}}</h2>
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
        </v-layout>
      </v-container>
    </v-content>
    <v-footer style="background-color: #42b883">
      <span>&copy; 2017</span>
    </v-footer>
    <v-snackbar
      v-model="isVisible"
      color="#42b883"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
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
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      drawer: false,
      myAPI: '52217232f795bbefbb1b7c951aae98ad',
      searchQuery: '',
      movies: [],
      isVisible: false
    }),
    methods: {
      getMovies () {
        let query = encodeURI(this.searchQuery)
        console.log(query)
        if (query) {
          axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.myAPI}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(response => (this.movies = response))
            .catch(error => console.log(error));
        }

      }
    },
    props: {
      source: String
    },
  }
</script>

<style>
  .v-card {
    transition: transform 0.3s ease-in-out;
  }

  .v-card:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }
</style>
