<template>
  <div>
    <div class="block">
      <video id="video-background" autoplay loop preload="auto">
        <source src="../assets/videos/hk.mp4" type="video/mp4">
      </video>
      <!--<iframe id="video-background" src="https://www.youtube.com/embed/0gVaAjEFMl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Proposal',
    components: {},
    // mounted() {
    //   const videoElement = document.getElementById('video-background');
    // }
  };
</script>

<style lang="scss" scoped>
  #video-background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
</style>
