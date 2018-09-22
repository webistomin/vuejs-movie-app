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
        :class="setMarginSearchField"
        v-model.trim="searchQuery"
        @input="getMovies">
      </v-text-field>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl fluid>
        <v-layout row wrap >
          <v-flex xs12 sm6 md3 v-for="movie of getMoviesList()" :key="movie.id">
            <v-card color="#35495e" hover style="min-height: 652px">
              <v-img
                :src="'http://image.tmdb.org/t/p/w400/' + movie.poster_path || 'https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg'"
                style="height: 500px"
              >
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h2 class="title">{{movie.title}}</h2>
                  <div>
                    <v-chip label v-for="genre of movie.genre_ids">{{genre}}</v-chip>
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
  export default {
    data: () => ({
      drawer: false,
      isVisible: false,
    }),
    mounted () {},
    computed: {
      setMarginSearchField () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'ml-2'
          case 'sm': return 'ml-3'
          case 'md': return 'ml-4'
          case 'lg': return 'ml-5'
        }
      },
      searchQuery: {
        get () {
          return this.$store.state.searchQuery
        },
        set (value) {
          this.$store.commit('updateQuery', value)
        }
      }
    },
    methods: {
      getMovies () {
        this.$store.dispatch('loadMovies')
      },
      getMoviesList () {
        return this.$store.getters.getMoviesList
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
</style>
