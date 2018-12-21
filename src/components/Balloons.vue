<template>
  <div id="balloonsContainer">
    <img id="balloon1" src="./../assets/images/w.png"/>
    <img id="balloon2" src="./../assets/images/o.png"/>
    <img id="balloon3" src="./../assets/images/o.png"/>
    <img id="balloon4" src="./../assets/images/h.png"/>
    <img id="balloon5" src="./../assets/images/o.png"/>
    <img id="balloon6" src="./../assets/images/o.png"/>
  </div>
</template>

<script>
  //TODO: Balloons remove scroll
  export default {
    name: 'Balloons',
    mounted() {
      setTimeout(() => {
        const planeContainer = document.getElementById('balloonsContainer');
        planeContainer.parentNode.removeChild(planeContainer);
      }, 4700);
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  #balloonsContainer {

    img {
      pointer-events: none;
      /*width: 15%;*/
      position: absolute;
    }

    #balloon1 {
      left: 5%;
      animation: floating 5s linear,
      fadeInOut 5s linear,
      swaying 2s ease-in-out infinite alternate,
      rotating 1.6s ease-in-out infinite alternate;
    }

    #balloon2 {
      left: 20%;
      animation: floating 4.8s linear,
      fadeInOut 5s linear,
      swaying2 4s ease-in-out infinite alternate,
      rotating 2.2s ease-in-out infinite alternate;
    }

    #balloon3 {
      left: 35%;
      animation: floating 5.2s linear,
      fadeInOut 5s linear,
      swaying2 3s ease-in-out infinite alternate,
      rotating2 2.3s ease-in-out infinite alternate;
    }

    #balloon4 {
      left: 50%;
      animation: floating 5.1s linear,
      fadeInOut 5s linear,
      swaying 2s ease-in-out infinite alternate,
      rotating 1.7s ease-in-out infinite alternate;
    }

    #balloon5 {
      left: 65%;
      animation: floating 5s linear,
      fadeInOut 5s linear,
      swaying2 1.7s ease-in-out infinite alternate,
      rotating 2.1s ease-in-out infinite alternate;
    }

    #balloon6 {
      left: 80%;
      animation: floating 4.7s linear,
      fadeInOut 5s linear,
      swaying 1.8s ease-in-out infinite alternate,
      rotating2 2s ease-in-out infinite alternate;
    }
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes floating {
    0% {
      bottom: -40%;
    }

    100% {
      bottom: 100%;
    }
  }

  @keyframes swaying {
    0% {
      margin-left: 15px;
    }

    100% {
      margin-left: -15px;
    }
  }

  @keyframes swaying2 {
    0% {
      margin-left: -10px;
    }

    100% {
      margin-left: 10px;
    }
  }

  @keyframes rotating {
    0% {
      transform: rotate(5deg);
    }

    100% {
      transform: rotate(-5deg);
    }
  }

  @keyframes rotating2 {
    0% {
      transform: rotate(-7deg);
    }

    100% {
      transform: rotate(7deg);
    }
  }

</style>
