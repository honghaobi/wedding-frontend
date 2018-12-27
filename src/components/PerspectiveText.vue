<template>
  <ul class="Words">
    <li class="Words-line">
      <p>&nbsp;</p>
      <p>You Are</p>
    </li>
    <li class="Words-line">
      <p>You Are</p>
      <p>Invited</p>
    </li>
    <li class="Words-line">
      <p>Invited</p>
      <p>To Come</p>
    </li>
    <li class="Words-line">
      <p>To Come</p>
      <p>Party</p>
    </li>
    <li class="Words-line">
      <p>Party</p>
      <p>With Us</p>
    </li>
    <li class="Words-line">
      <p>With Us</p>
      <p>In Cabo</p>
    </li>
    <li class="Words-line">
      <p>In Cabo</p>
      <p>Mexico</p>
    </li>
    <li class="Words-line">
      <p>Mexico</p>
      <p>&nbsp;</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'PerspectiveText',
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  /*
 ** Change this if you need to modify
 ** the amount of lines displayed
 */
  $total-lines: 7;


  /*
  ** Leave these unless you want
  ** to open a whole can of worms
  */
  $left-offset: 29px;
  $clip-height: 59px;
  $line-height: $clip-height - 5px;

  /*
  ** Apply styles to the parent element
  */
  .Words {
    background-color: $primary-color;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 68px;
    font-weight: 900;
    text-transform: uppercase;
    // Sort out nasty text fuzz
    transform: translate3d(0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -webkit-font-kerning: normal;
    -webkit-text-size-adjust: 100%;
  }


  /*
  ** Apply common styles to each line of text
  */
  .Words-line {
    height: $clip-height;
    overflow: hidden;
    position: relative;

    // Change the perspective of each alternating line
    &:nth-child(odd) {
      transform: skew(60deg, -30deg) scaleY(.66667);
    }
    &:nth-child(even) {
      transform: skew(0deg, -30deg) scaleY(1.33333);
    }

    // Loop over the total lines and apply a left offset
    @for $i from 1 through $total-lines+1 {
      &:nth-child(#{$i}) {
        left: $left-offset * $i;
      }
    }
  }

  /*
  ** Fine-grained text styles
  */
  p {
    height: $clip-height;
    line-height: $line-height;
    padding: 0 10px;
    transition: all .4s ease-in-out;
    transform: translate3d(0, 0, 0);
    vertical-align: top;
    white-space: nowrap;
    color: $accent-color;
  }

  /*
  ** The hover interaction
  */
  .Words:hover {
    p {
      transform: translate3d(0, -($clip-height), 0);
    }
  }
</style>
