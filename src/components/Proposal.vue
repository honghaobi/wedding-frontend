<template>
  <div>
    <h1><strong>The Proposal</strong></h1>
    <div class="block">
      <!--<video autoplay loop id="video-background" muted plays-inline>-->
        <!--<source src="../assets/yo.mp4" type="video/mp4">-->
      <!--</video>-->
      <iframe id="video-background" src="https://www.youtube.com/embed/0gVaAjEFMl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>

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
    z-index: -100;
  }
</style>
