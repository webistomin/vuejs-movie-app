<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="pt-5"
    >
      <v-list three-line>
        <v-list-tile active-class="link-active" @click="drawer = false" tabindex="0">
          <v-list-tile-action>
            <v-icon large>star_border</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Popular</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="link-active" @click="drawer = false" to="/top-rated-movies">
          <v-list-tile-action>
            <v-icon large>trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Top rated</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="link-active" @click="drawer = false" to="/upcoming-movies">
          <v-list-tile-action>
            <v-icon large>calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Upcoming</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="link-active" @click="drawer = false" to="/now-playing-movies">
          <v-list-tile-action>
            <v-icon large>play_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Now playing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="link-active" @click="drawer = false" to="/favorite-movies">
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
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link to="/" class="pointer" tag="h1">TMDb Movie App</router-link>
      </v-toolbar-title>
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
        :class="setMarginSearchField"
        v-model.trim="searchQuery"
        @input="getMoviesFromAPI">
      </v-text-field>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
      <v-container grid-list-xl fluid v-if="searchQuery">
        <v-layout row wrap >
          <v-flex xs12 sm6 md3 v-for="movie of getMoviesList" :key="movie.id">
            <v-card color="#35495e" hover style="min-height: 652px">
              <v-img
                :src="movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"
                style="height: 500px"
              >
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h2 class="subheading">{{movie.title}}</h2>
                  <div>
                    <v-chip class="caption" label v-for="genre of getCurrentGenres(movie.genre_ids)">{{genre}}</v-chip>
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
    </v-content>
    <v-footer style="background-color: #42b883">
      <span>&copy; 2017</span>
    </v-footer>
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
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      drawer: false,
      isVisible: false,
    }),
    mounted () {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.$store.state.personalAPIKey}&language=en-US`)
        .then((response) => this.$store.commit('saveGenres', response.data))
        .catch(error => console.log(error));
    },
    computed: {
      setMarginSearchField () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'ml-2'
          case 'sm': return 'ml-3'
          case 'md': return 'ml-4'
          case 'lg': return 'ml-5'
          case 'xl': return 'ml-5'
        }
      },
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
      getGenresList () {
        return this.$store.getters.getGenresList.genres
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
      }
    },
    methods: {
      getMoviesFromAPI () {
        // this.$router.push('/');
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

<style>
  .v-card {
    transition: transform 0.3s ease-in-out;
  }

  .v-card:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }

  .link-active {
    color: #ffffff;
    background-color: #42b883;
  }

  .pointer {
    cursor: pointer;
  }

  .theme--dark.v-list .v-list__tile--link:hover {
    color: #ffffff;
    background-color: #42b883;
  }

  .theme--dark.v-list .v-list__tile--link:active {
    opacity: 0.6;
  }

  .flex-list {
    display: flex;
    justify-content: center;
  }

</style>
