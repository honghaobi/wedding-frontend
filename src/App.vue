<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";
  @import "./css/main.scss";

  @include md-register-theme("default", (
    primary: $primary-color,
    accent: $accent-color,
    theme: dark,
  ));
  @import "~vue-material/dist/theme/all";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
