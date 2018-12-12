<template>
  <div class="contenedor">
    <form>
      <input type="radio" name="slider" title="Lets Party"/>
      <input type="radio" name="slider" title="RSVP" autofocus="autofocus" checked="checked"/>
      <input type="radio" name="slider" title="Resort"/>
      <input type="radio" name="slider" title="Travel"/>
      <input type="radio" name="slider" title="About H & K"/>
      <input type="radio" name="slider" title="The Proposal"/>
      <input type="radio" name="slider" title="Wedding Party"/>
      <input type="radio" name="slider" title="#henrysdreamwedding"/>
      <div class="labels">
        <label class="Slide" for="Slide1" id="Slide1">
          <LetsParty/>
        </label>
        <label class="Slide" for="Slide2" id="Slide2">
          <RSVP/>
        </label>
        <label class="Slide" for="Slide3" id="Slide3">
          <h1><strong>Resort Info</strong></h1>
        </label>
        <label class="Slide" for="Slide4" id="Slide4">
          <h1><strong>Travel Info</strong></h1>
        </label>
        <label class="Slide" for="Slide5" id="Slide5">
          <h1><strong>Henry & Kelli</strong></h1>
        </label>
        <label for="Slide6" id="Slide6">
          <Proposal/>
        </label>
        <label for="Slide7" id="Slide7">
          <h1><strong>Wedding Party</strong></h1>
        </label>
        <label for="Slide8" id="Slide8">
          <h1><strong>#HENRYSDREAMWEDDING</strong></h1>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
  import LetsParty from '../components/LetsParty';
  import RSVP from '../components/RSVP';
  import Proposal from '../components/Proposal';

  export default {
    name: 'Menu',
    components: {
      LetsParty,
      RSVP,
      Proposal
    },
  };
  //TODO: USE https://www.npmjs.com/package/vue2-touch-events for swiping on phone.
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $npages: 8;
  $bg-odd: $primary-color;
  $bg: linear-gradient(45deg, $accent-color 10%, #85d8ce 90%);

  .contenedor {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, $accent-color 10%, #85d8ce 90%);
    position: relative;
    display: flex;
    align-items: center;

    form {
      box-sizing: border-box;
      text-align: center;
      padding: 10px;
      display: inline-flex;
      /*flex-direction: column;*/
      position: fixed;
      height: 100vh;
      justify-content: center;

      input {
        height: 0;
        margin: 0px 15px;
        z-index: 1;

        &:checked {
          outline: 0;
          border: 0;
        }

        &:before {
          content: "";
          position: absolute;
          display: inline-block;
          width: 8px;
          height: 8px;
          border: 1px solid rgba(255, 255, 255, 0.81);
          border-radius: 11px;
          cursor: pointer;
          transition: all 0.25s linear;
        }

        &:checked:before {
          background-color: white;
        }

        &:after {
          content: "" attr(title) "";
          position: absolute;
          bottom: 5px;
          opacity: 0;
          color: white;
          font-size: 40px;
          display: inline;
          min-width: 80px;
          transition: all 0.5s linear;
          text-transform: uppercase;
        }

        &:checked:after {
          opacity: 1;
          left: 20px;
        }

        &:hover:after:not(label) {
          opacity: 1;
        }

        @for $i from 1 through $npages {
          &:nth-of-type(#{$i}):checked ~ .labels label {
            transform: translateY(-#{($i - 1) * 100%});
          }
        }
      }

      .labels {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;

        label {
          min-width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: $bg;
          color: white;
          z-index: 0;
          transition: all 0.75s cubic-bezier(0.75, 0.25, 0, 1.05);

          &:nth-child(odd) {
            background-color: $bg-odd;
            color: white;
          }
        }
      }
    }
  }

  /* Fancy style */
  body {
    font: {
      family: "Open sans", sans-serif;
      size: 16px;
      weight: 100;
    };
    color: white;
  }

  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 110px;

    .block {
      width: inherit;
      font: {
        size: 11px;
        weight: 400;
      };
      line-height: 1.5;
      margin: 42px 0;
      display: flex;
      justify-content: center;

      span {
        margin: 0 42px;

        i {
          margin-bottom: 22px;

          @extend span;

          &:before {
            font-size: 30px;
          }
        }
      }
    }
  }

  .Slide:nth-child(even) .content .block {
    color: #717171;
  }

  .icon {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    font-size: 11px;
    text-align: center;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
  }

  #Slide5 .content .block {
    flex-direction: column;

    i {
      margin: 0 12px;
      vertical-align: middle;
    }
  }

  strong {
    font-weight: 400;
  }

  h1 {
    text-transform: uppercase;
  }

  ol {
    text-align: left;
    list-style-type: decimal;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.25s linear;

    &:hover {
      color: rebeccapurple;
    }
  }
</style>
