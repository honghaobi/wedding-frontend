<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/all-guests">All Guests</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: md-get-palette-color(teal, A400),
  secondary: md-get-palette-color(purple, 100),
  accent: md-get-palette-color(red, A200),
  theme: light,
));
@import "~vue-material/dist/theme/all";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
