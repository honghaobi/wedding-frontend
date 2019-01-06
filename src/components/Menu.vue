<template>
  <div class="container">
    <nav id="bt-menu" class="bt-menu">
      <a href="#" class="bt-menu-trigger hvr-bob"><span>Menu</span></a>
      <ul>
        <li><a href="#" class="bt-icon icon-star route hvr-wobble-horizontal">
          <router-link to="/">Home</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-sun route hvr-wobble-horizontal">
          <router-link to="/rsvp">RSVP</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-windows route hvr-wobble-horizontal">
          <router-link to="/resort">RESORT</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-speaker route hvr-wobble-horizontal">
          <router-link to="/travel">TRAVEL</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-star route hvr-wobble-horizontal">
          <router-link to="/hk">H&K</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-user-outline route hvr-wobble-horizontal">
          <router-link to="/crew">Crew</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-bubble route hvr-wobble-horizontal">
          <router-link to="/proposal">PROPOSAL</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-bubble route hvr-wobble-horizontal">
          <router-link to="/gallery">Gallery</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-bubble route hvr-wobble-horizontal">
          <router-link to="/faq">FAQ</router-link>
        </a></li>
        <li><a href="#" target="_blank" class="bt-icon icon-bubble route hvr-wobble-horizontal">
          <a href="https://www.zola.com/registry/henryandkelli" target="_blank">Registry</a>
        </a></li>
      </ul>
      <img class="question hvr-bounce-in" @click="showQuestionDialog = true" src="./../assets/images/question.png"/>
      <md-dialog :md-active.sync="showQuestionDialog">
        <md-dialog-title>
          <h3>Got a question for us?</h3>
          <div class="md-subheading">Ask us anything or just want to drop us a line.
                                     This will send us a text message and email. We will be sure to get back to you ASAP.
          </div>
        </md-dialog-title>
        <md-dialog-content>
          <md-field>
            <label>Your Name</label>
            <md-input v-model="guestName" required></md-input>
          </md-field>
          <md-field>
            <label>Your Question</label>
            <md-textarea v-model="guestQuestion" required></md-textarea>
          </md-field>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-accent md-raised" @click="handleClose">Close</md-button>
          <md-button class="md-primary md-raised" @click="handleSend" :disabled="!guestQuestion">Send</md-button>
        </md-dialog-actions>
      </md-dialog>
    </nav>
  </div>
</template>

<script>
  import store from '../store';

  export default {
    name: 'Menu',
    components: {},
    data: () => ({
      showQuestionDialog: false,
      guestName: null,
      guestQuestion: null,
    }),
    mounted() {
      function classReg(className) {
        return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
      }

      let hasClass;
      let addClass;
      let removeClass;

      if ( 'classList' in document.documentElement ) {
        hasClass = function (elem, c) {
          return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
          elem.classList.add(c);
        };
        removeClass = function (elem, c) {
          elem.classList.remove(c);
        };
      } else {
        hasClass = function (elem, c) {
          return classReg(c)
            .test(elem.className);
        };
        addClass = function (elem, c) {
          if ( !hasClass(elem, c) ) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function (elem, c) {
          elem.className = elem.className.replace(classReg(c), ' ');
        };
      }

      function toggleClass(elem, c) {
        const fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
      }

      const classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };


      if ( typeof define === 'function' && define.amd ) {
        // AMD
        define(classie);
      } else {
        // browser global
        window.classie = classie;
      }

      function init() {
        const overlay = document.createElement('div');
        overlay.className = 'bt-overlay';

        const menu = document.getElementById('bt-menu');
        const resetMenu = function () {
          classie.remove(menu, 'bt-menu-open');
          classie.add(menu, 'bt-menu-close');
        };
        const closeClickFn = function (ev) {
          resetMenu();
          overlay.removeEventListener('click', closeClickFn);
        };

        menu.addEventListener('click', function (ev) {
          if ( ev.target.href !== 'https://www.zola.com/registry/henryandkelli' ) {
            ev.stopPropagation();
            ev.preventDefault();
          }
          if ( classie.has(menu, 'bt-menu-open') ) {
            resetMenu();
          } else {
            classie.remove(menu, 'bt-menu-close');
            classie.add(menu, 'bt-menu-open');
            overlay.addEventListener('click', closeClickFn);
          }
        });
        menu.appendChild(overlay);
      }

      init();
    },
    methods: {
      handleClose() {
        this.showQuestionDialog = false;
      },
      handleSend() {
        if ( this.guestName && this.guestQuestion ) {
          store.dispatch('SEND_HENRY_QUESTION', {
            guestName: this.guestName,
            guestQuestion: this.guestQuestion,
          });
          this.showQuestionDialog = false;
          this.guestQuestion = null;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  $color_1: $accent-color;
  $color_2: transparent;
  $color_3: $primary-color;
  $background_color_1: rgba(0, 0, 0, 0);
  $background_color_2: rgba(20, 34, 54, 0.5);
  $background_color_3: $accent-color;
  $border_color_1: $white;

  .container {
    padding: 0px;
  }

  .bt-menu {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-width: 0px;
    border-style: solid;
    border-color: $border_color_1;
    background-color: $background_color_1;
    -webkit-backface-visibility: hidden;
    -webkit-transition: border-width 0.3s, background-color 0.3s, height 0s 0.3s;
    transition: border-width 0.3s, background-color 0.3s, height 0s 0.3s;

    ul {
      position: fixed;
      margin: 0;
      padding: 0;
      list-style: none;
      pointer-events: none;

      &:first-of-type {
        top: 70px;
        left: 0;

        li {
          width: 150px;
          height: 42px;
          line-height: 50px;
          -webkit-transform: translate3d(-100%, 50%, 0);
          transform: translate3d(-100%, 50%, 0);
          pointer-events: auto;

          a {
            padding: 0 10px;
            color: $color_1;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 1em;
            -webkit-transition: color 0.2s;
            transition: color 0.2s;

            &:hover {
              color: $color_3;
            }

            &:focus {
              color: $color_3;
            }
          }
        }
      }

      &:nth-of-type(2) {
        right: 0;
        bottom: 0;

        li {
          float: left;
          font-size: 0px;
          width: 60px;
          height: 50px;
          line-height: 50px;
          -webkit-transform: scale(0);
          transform: scale(0);

          a {
            color: $color_2;
            text-align: center;
            font-size: 0px;
          }
        }
      }

      li {
        display: block;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s, visibility 0s 0.3s;
        transition: transform 0.3s, opacity 0.2s, visibility 0s 0.3s;

        a {
          display: block;
          display: block;
          outline: none;
          text-decoration: none;

          &:before {
            color: $color_1;
            font-size: 24px;
            -webkit-transition: color 0.2s;
            transition: color 0.2s;
          }

          &:hover {
            &:before {
              color: $color_3;
            }
          }

          &:focus {
            &:before {
              color: $color_3;
            }
          }
        }
      }
    }
  }

  .question {
    display: none;
  }

  .bt-menu.bt-menu-open {
    height: 100%;
    border-width: 0px 0px 50px 120px;
    background-color: $background_color_2;
    -webkit-transition: border-width 0.3s, background-color 0.3s;
    transition: border-width 0.3s, background-color 0.3s;

    .question {
      cursor: pointer;
      display: block;
      position: absolute;
      width: 40px;
      right: 5px;
      bottom: -45px;
    }

    ul {
      &:first-of-type {
        li {
          visibility: visible;
          opacity: 1;
          -webkit-transition: -webkit-transform 0.3s, opacity 0.3s 0.1s;
          transition: transform 0.3s, opacity 0.3s;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      &:nth-of-type(2) {
        li {
          visibility: visible;
          opacity: 1;
          -webkit-transition: -webkit-transform 0.3s, opacity 0.3s 0.1s;
          transition: transform 0.3s, opacity 0.3s;
          -webkit-transform: scale(1);
          transform: scale(1);

          &:first-child {
            -webkit-transition-delay: 0.1s;
            transition-delay: 0.1s;
          }

          &:nth-child(2) {
            -webkit-transition-delay: 0.2s;
            transition-delay: 0.2s;
          }

          &:nth-child(3) {
            -webkit-transition-delay: 0.3s;
            transition-delay: 0.3s;
          }

          &:nth-child(4) {
            -webkit-transition-delay: 0.4s;
            transition-delay: 0.4s;
          }
        }
      }
    }
  }

  .bt-overlay {
    position: absolute;
    width: 100%;
  }

  .bt-menu-open {
    .bt-overlay {
      height: 100%;
    }

    .bt-menu-trigger {
      span {
        &:before {
          -webkit-transform: translateY(-300%);
          transform: translateY(-300%);
        }

        &:after {
          -webkit-transform: translateY(300%);
          transform: translateY(300%);
        }
      }
    }
  }

  .bt-menu-trigger {
    position: fixed;
    top: 10px;
    left: 20px;
    z-index: 1000;
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;

    span {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      height: 8%;
      background-color: $background_color_3;
      font-size: 0px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: background-color 0.3s;
      transition: background-color 0.3s;
      box-shadow: 1px 2px $primary-color-shade-1;

      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: $color_1;
        content: '';
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transform: translateY(-250%);
        transform: translateY(-250%);
        box-shadow: 1px 2px $primary-color-shade-1;
      }

      &:after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: $color_1;
        content: '';
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transform: translateY(250%);
        transform: translateY(250%);
        box-shadow: 1px 2px $primary-color-shade-1;
      }
    }
  }

</style>
