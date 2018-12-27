<template>
  <div class="videoBG">
    <div class="videoWrapper">
      <iframe src="https://player.vimeo.com/video/308382888?loop=1&autoplay=1&color=54D4C4&title=0&byline=0&portrait=0"
              allow="autoplay" frameborder="0" webkitallowfullscreen mozallowfullscreen
              allowfullscreen></iframe>
    </div>
    <md-content class="md-primary viewingMessage">please rotate your device and use full-screen for best viewing</md-content>
  </div>
</template>

<script>
  export default {
    name: 'Proposal',
    components: {},
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  .videoBG {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $black;

    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;

      object,
      embed,
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .viewingMessage {
      display: none;
    }

    @media only screen and (max-device-width: 480px) and (orientation: portrait) {
      .viewingMessage {
        text-align: center;
        color: $white;
        display: block;
      }
    }
  }
</style>
