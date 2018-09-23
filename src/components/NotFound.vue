<template>
  <div class="error404">
    <h1>404</h1>
    <h2>Page not found</h2>
    <v-icon large color="rgba(255, 255, 255, 0.7)">sentiment_dissatisfied</v-icon>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  html {
    font-family: 'Roboto', sans-serif;
  }
  h1 {
    font-size: 8em;
    margin: 0.2em 0.5em;
    margin-top: 0;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0px;
  }
  h2 {
    font-size: 1.7em;
    margin: 0.2em 0.5em;
    color: rgba(255, 255, 255, 0.6);
  }
  h2 .material-icons {
    font-size: 1.5em;
    position: relative;
    top: 10px;
  }
  div.error404 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 16em;
    }
  }

</style>
