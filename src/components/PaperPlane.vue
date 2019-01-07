<template>
  <div id="planeContainer">
    <div id="lside"></div>
    <div id="rside"></div>
    <div id="lwing"></div>
    <div id="rwing"></div>
  </div>
</template>

<script>
  export default {
    name: 'PaperPlane',
    mounted() {
      setTimeout(() => {
        const planeContainer = document.getElementById('planeContainer');
        planeContainer.parentNode.removeChild(planeContainer);
      }, 5000);
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  @keyframes fly
  {
    0%
    {
      transform: perspective(1000px) rotateY(160deg) translateX(110vw) translateY(20%);
    }
    100%
    {
      transform: perspective(1000px) rotateY(200deg) translateX(-120vw) translateY(-80%);
    }
  }

  #planeContainer
  {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50vh;
    height: 50vh;
    transform: rotateY(-90deg);
    transform-style: preserve-3d;
    transition: .5s;
    z-index: 3;
    animation: fly 5s ease-in;
  }

  #lside
  {
    border-top: 25vh solid transparent;
    border-right: 50vh solid $accent-color-shade-2;
    transform: rotate(-5deg) rotateY(0deg) rotateX(-10deg);
    transform-origin: bottom;
  }

  #rside
  {
    margin-top: -25vh;
    border-top: 25vh solid transparent;
    border-right: 50vh solid $accent-color-shade-2;
    transform: rotate(-5deg) rotateY(0deg) rotateX(10deg);
    transform-origin: bottom;
  }

  #lwing
  {
    margin-top: -25vh;
    border-bottom: 25vh solid $accent-color-shade-1;
    border-right: 30vh solid transparent;
    border-left: 50vh solid transparent;
    transform: rotate(-22deg) rotateX(55deg) rotateY(-10deg) rotateZ(25deg);
    transform-origin: top;
  }

  #rwing
  {
    margin-top: -25vh;
    border-bottom: 25vh solid $accent-color-shade-1;
    border-right: 30vh solid transparent;
    border-left: 50vh solid transparent;
    transform: rotate(-22deg) rotateX(-55deg) rotateY(10deg) rotateZ(25deg);
    transform-origin: top;
  }

</style>
