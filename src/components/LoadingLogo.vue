<template>
  <transition name="fade">
    <div class="loadingScreen" v-if="show">
      <img class="logo hvr-bob" src="./../assets/images/logo.png"/>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'LoadingLogo',
    data: () => ({
      show: true,
    }),
    created() {
      setTimeout(() => {
        this.show = false;
      }, 2500);
    },
  };
</script>

<style lang="scss" scoped>
  @import "../css/animation.scss";

  .loadingScreen {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $off-white-cream;
    z-index: 9;
    justify-content: center;
    align-items: center;

    .logo {
      width: 100px;
      height: 100px;
    }
  }
</style>
