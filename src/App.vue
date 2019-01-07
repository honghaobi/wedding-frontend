<template>
  <div id="app">
    <router-view/>
    <Menu/>
    <LoadingLogo/>
  </div>
</template>

<script>
  import Menu from './components/Menu';
  import LoadingLogo from './components/LoadingLogo';

  export default {
    name: 'App',
    components: {
      Menu,
      LoadingLogo
    },
  };
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";
  @import "~hover.css";
  @import "./css/main.scss";

  @include md-register-theme("default", (
    primary: $primary-color,
    accent: $accent-color,
    theme: light,
  ));
  @import "~vue-material/dist/theme/all";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Poppins', sans-serif;
    @media only screen and (max-device-width: 480px) {
      font-family: 'Barlow', sans-serif;
    }
  }

</style>
