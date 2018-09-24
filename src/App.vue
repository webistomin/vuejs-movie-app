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
      <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
      </transition>
    </v-content>
    <v-footer style="background-color: #42b883">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      drawer: false
    }),
    mounted () {
      this.$store.dispatch('getAllGenresFromAPI')
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
          return this.$store.state.shared.searchQuery
        },
        set (value) {
          this.$store.commit('updateCurrentPage', 1);
          this.$store.commit('updateQuery', value);
        }
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
          return ['unknown']
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


  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.3s ease;
  }

  .fade-leave {}

  .fade-leave-active {
    transition: opacity 0.3s ease;
    opacity: 0;
  }

</style>
