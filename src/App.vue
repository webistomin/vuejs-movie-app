<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left prominent style="background-color: #42b883">
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
      class="ml-5">
      </v-text-field>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed style="background-color: #42b883">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    }
  }
</script>

<style>

</style>
