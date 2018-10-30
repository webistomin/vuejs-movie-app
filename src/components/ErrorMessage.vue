<template>
  <v-snackbar
    :value="errorVisibility"
    color="error"
    dark
    :timeout="20000"
    multi-line>
    {{getErrorMessage}}
    <v-btn
      dark
      flat
      @click="setErrorVisibility">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    computed: {
      getErrorMessage() {
        return this.$store.getters.getErrorMessage;
      },
      errorVisibility() {
        return this.$store.getters.getErrorVisibility;
      }
    },
    methods: {
      setErrorVisibility () {
        this.$store.commit('setErrorVisibility', false);
      }
    }
  }
</script>

<style scoped>

</style>
