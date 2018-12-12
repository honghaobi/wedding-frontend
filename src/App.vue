<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("default", (
    primary: #F25652,
    accent: #3E4E59,
    theme: light,
  ));
  @import "~vue-material/dist/theme/all";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
