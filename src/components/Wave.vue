<template>
  <div class="footer-water">
    <div class="box">
      <div id="water" class="water">
        <div class="water_wave water_wave_front1">
          <div class="image-container"></div>
        </div>
        <div class="water_wave water_wave_front2">
          <div class="image-container"></div>
        </div>
        <div class="water_wave water_wave_front3">
          <div class="image-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Wave',
  };
</script>

<style lang="css" scoped>

  @keyframes wave-1
  {
    100%
    {
      transform: translate(50%, 0);
    }
  }

  @keyframes wave-2
  {
    100%
    {
      transform: translate(-50%, 0);
    }
  }

  @keyframes wave-3
  {
    100%
    {
      transform: translate(50%, 0);
    }
  }

  @keyframes wave-fill
  {
    100%
    {
      top: -120px;
    }
  }

  @keyframes waveRotate1
  {
    from
    {
      transform: rotate(0deg) translateX(25px) rotate(0deg);
    }
    to
    {
      transform: rotate(360deg) translateX(25px) rotate(-360deg);
    }
  }

  @keyframes waveRotate2
  {
    from
    {
      transform: rotate(0deg) translateX(15px) rotate(0deg);
    }
    to
    {
      transform: rotate(360deg) translateX(15px) rotate(-360deg);
    }
  }

  @keyframes waveRotate3
  {
    from
    {
      transform: rotate(0deg) translateX(5px) rotate(0deg);
    }
    to
    {
      transform: rotate(360deg) translateX(5px) rotate(-360deg);
    }
  }

  .footer-water
  {
    display: block;
    position: fixed;
    pointer-events: none;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .footer-water .box .water_wave_front1 .image-container
  {
    background-image: url('./../assets/wave1.png');
    animation: wave-1 10s infinite linear;
  }

  .footer-water .box .water_wave_front2 .image-container
  {
    background-image: url('./../assets/wave2.png');
    animation: wave-2 8s infinite linear;
  }

  .footer-water .box .water_wave_front3 .image-container
  {
    background-image: url('./../assets/wave3.png');
    animation: wave-1 6s infinite linear;
  }

  .footer-water .box .water
  {
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translate(0, 100%);
    background: #2bd3f4;
    /* animation: wave-fill 5s infinite linear; */
  }

  .footer-water .box .water_wave
  {
    width: 235%;
    position: absolute;
    bottom: 100%;
    height: 25px;
    background-size: contain;
    box-shadow: 0px -3px 23px 5px #111;
  }

  .footer-water .box .water_wave .image-container
  {
    width: 100%;
    height: 100%;
    background-size: contain;
    position: absolute;
    bottom: 24px;
  }

  .footer-water .box .water_wave_front1
  {
    right: -10px;
    margin-bottom: -0px;
    -webkit-animation: waveRotate1 4s linear infinite;
    -moz-animation: waveRotate1 4s linear infinite;
    animation: waveRotate1 4s linear infinite;
    background: #209dda;
  }

  .footer-water .box .water_wave_front2
  {
    left: -10px;
    margin-bottom: -5px;
    -webkit-animation: waveRotate2 6s linear infinite;
    -moz-animation: waveRotate2 6s linear infinite;
    animation: waveRotate2 6s linear infinite;
    background: #4cb2e4;
  }

  .footer-water .box .water_wave_front3
  {
    right: -10px;
    margin-bottom: -10px;
    -webkit-animation: waveRotate3 10s linear infinite;
    -moz-animation: waveRotate3 10s linear infinite;
    animation: waveRotate3 10s linear infinite;
    background: #6ac4f0;
  }
</style>
