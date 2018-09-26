<template>
    <v-flex xs12 sm6 md3 xl2
            :key="itemName.id"
    >
      <v-card color="#35495e" hover style="min-height: 652px" :to="'/movie/' + itemName.id">
        <v-img
          :src="itemName.poster_path ? `http://image.tmdb.org/t/p/w500/${itemName.poster_path}` : `https://vsetattoo.com.ua/wp-content/themes/TattooKarma/assets/imagenotfound.svg`"
          style="height: 500px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <h2 class="subheading">{{itemName.title}}</h2>
            <div>
              <div v-if="itemName.genre_ids">
                <v-chip class="caption" label v-for="genre of getCurrentGenres(itemName.genre_ids)" :key="genre">{{genre}}</v-chip>
              </div>
              <div v-else>
                <v-chip class="caption" label v-for="genre of getCurrentGenres(itemName.genres)" :key="genre.id">{{genre}}</v-chip>
              </div>
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
              <v-icon :data-id="itemName.id">{{isFavorite(itemName.id)}}</v-icon>
            </v-btn>
            <span>Add to favorite list</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
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
    </v-flex>
</template>

<script>
  export default {
    props: {
      itemName: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isVisible: false,
      }
    },
    methods: {
      isFavorite(id) {
        const favoriteIds = this.$store.getters.getFavoriteMoviesIds;
        console.log(favoriteIds)
        console.log(id)
        if (favoriteIds.includes(String(id))) {
          return 'favorite'
        } else {
          return 'favorite_border'
        }
      },
      getCurrentGenres(arrayOfGenreIds) {
        const result = [];
        const genresList = this.$store.getters.getGenresList.genres;

        if (typeof arrayOfGenreIds[0] === 'number') {
            for (let j = 0; j < arrayOfGenreIds.length; j++) {
              for (let i = 0; i < genresList.length; i++) {
                if (arrayOfGenreIds[j] === genresList[i].id) {
                  result.push(genresList[i].name)
                }
              }
            }

        } else {
            for (let j = 0; j < arrayOfGenreIds.length; j++) {
              for (let i = 0; i < genresList.length; i++) {
                if (arrayOfGenreIds[j].id === genresList[i].id) {
                  result.push(genresList[i].name)
                }
              }
            }
        }

        if (result.length !== 0) {
          return result
        } else {
          return ['unknown']
        }
      },
      addToFavorite(event) {
        if (event.target.innerHTML === 'favorite_border') {
          event.target.innerHTML = 'favorite';
          this.isVisible = true;
          this.$store.commit('addToFavoriteMoviesIdsList', event.target.dataset.id)
        } else {
          event.target.innerHTML = 'favorite_border';
          this.$store.commit('removeFromFavoriteMoviesIdsList', event.target.dataset.id)
        }
      }
    },
  }
</script>

<style scoped>
  .v-card {
    transition: transform 0.3s ease-in-out;
  }

  .v-card:hover,
  .v-card:focus {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
  }

  .v-btn--floating .v-btn__content {
    height: inherit;
  }

  .v-btn .v-btn__content .v-icon {
    height: inherit;
  }
</style>
