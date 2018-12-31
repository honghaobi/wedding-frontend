<template>
  <div>
    <div class="background">
      <div class="middleground">
        <div class="foreground">
          <h2>Henry&nbsp;&nbsp;Kelli</h2>
        </div>
      </div>
    </div>
    <div class="border">
    </div>
  </div>
</template>

<script>
  import VanillaTilt from '../js/vanilla-tilt';

  export default {
    name: 'home',
    components: {},
    data: () => ({
      window: {
        width: 0,
        height: 0
      },
      loaded: false,
    }),
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    mounted() {
      if ( this.window.width > 600 ) {
        VanillaTilt.init(document.querySelector('.middleground'), {
          max: 5,
          speed: 500,
          reset: true,
          scale: 1,
          // glare: true,
          // "max-glare": 0.25,
        });
      }
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      onLoaded() {
        this.loaded = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;

  h2 {
    position: fixed;
    font-family: $font_family_1;
    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: $white;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    margin-left: -8px;
  }

  @media screen and (max-width: 479px) {
    h2 {
      font-size: 25px;
      margin-left: 0px;
    }
  }

  .border {
    border: 30px solid $white;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .background {
    background-image: url('./../assets/photos/home/home_b.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
  }

  .middleground {
    background-image: url('./../assets/photos/home/home_m.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .foreground {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./../assets/photos/home/home_f.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    transform: translateZ(50px);
  }

</style>
