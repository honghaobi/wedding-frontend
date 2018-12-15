<template>
  <div id="app">
    <router-view/>
    <Menu/>
  </div>
</template>

<script>
  import Menu from './components/Menu';
  export default {
    name: 'app',
    components: {
      Menu
    },
  };
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";
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
  }
</style>
