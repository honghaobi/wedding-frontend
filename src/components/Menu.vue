<template>
  <div class="container">
    <nav id="bt-menu" class="bt-menu">
      <a href="#" class="bt-menu-trigger"><span>Menu</span></a>
      <ul>
        <li><a href="#" class="bt-icon icon-user-outline route">
          <router-link to="/">PARTY</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-sun route">
          <router-link to="/rsvp">RSVP</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-windows route">
          <router-link to="/resort">RESORT</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-speaker route">
          <router-link to="/travel">TRAVEL</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-star route">
          <router-link to="/hk">H&K</router-link>
        </a></li>
        <li><a href="#" class="bt-icon icon-bubble route">
          <router-link to="/proposal">PROPOSAL</router-link>
        </a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    components: {},
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

      function mobilecheck() {
        let check = false;
        (function (a) {
          if ( /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            a)
               || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)) ) {
            check = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      }

      function init() {

        const menu = document.getElementById('bt-menu'),
          trigger = menu.querySelector('a.bt-menu-trigger'),
          linksNodeArray = menu.querySelectorAll('a.route'),
          // event type (if mobile use touch events)
          eventtype = mobilecheck() ? 'touchstart' : 'click',
          resetMenu = function () {
            classie.remove(menu, 'bt-menu-open');
            classie.add(menu, 'bt-menu-close');
          },
          closeClickFn = function (ev) {
            resetMenu();
            overlay.removeEventListener(eventtype, closeClickFn);
          };

        const overlay = document.createElement('div');
        overlay.className = 'bt-overlay';
        menu.appendChild(overlay);

        trigger.addEventListener(eventtype, function (ev) {
          ev.stopPropagation();
          ev.preventDefault();
          if ( classie.has(menu, 'bt-menu-open') ) {
            resetMenu();
          } else {
            classie.remove(menu, 'bt-menu-close');
            classie.add(menu, 'bt-menu-open');
            overlay.addEventListener(eventtype, closeClickFn);
          }
        });

        linksNodeArray.forEach(linkNode => {
          linkNode.addEventListener(eventtype, function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            if ( classie.has(menu, 'bt-menu-open') ) {
              resetMenu();
            } else {
              classie.remove(menu, 'bt-menu-close');
              classie.add(menu, 'bt-menu-open');
              overlay.addEventListener(eventtype, closeClickFn);
            }
          });
        });
      }

      init();
    },
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  $color_1: #fff;
  $color_2: transparent;
  $color_3: #1abc9c;
  $background_color_1: rgba(0, 0, 0, 0);
  $background_color_2: rgba(0, 0, 0, 0.3);
  $background_color_3: #fff;
  $border_color_1: #333;

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    &::before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }

  body {
    background: #1abc9c;
  }

  .container {
    padding: 80px;
  }

  .bt-menu {
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

      &:first-of-type {
        top: 75px;
        left: 0;

        li {
          width: 150px;
          height: 50px;
          line-height: 50px;
          -webkit-transform: translate3d(-100%, 50%, 0);
          transform: translate3d(-100%, 50%, 0);

          a {
            padding: 0 20px;
            box-shadow: inset 0 1px rgba(0, 0, 0, 0.2);
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

          &:last-child {
            a {
              box-shadow: inset 0 1px rgba(0, 0, 0, 0.2), inset 0 -1px rgba(0, 0, 0, 0.2);
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

  .bt-menu.bt-menu-open {
    height: 100%;
    border-width: 0px 0px 50px 150px;
    background-color: $background_color_2;
    -webkit-transition: border-width 0.3s, background-color 0.3s;
    transition: border-width 0.3s, background-color 0.3s;

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
    z-index: 100;
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

      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        content: '';
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transform: translateY(-250%);
        transform: translateY(-250%);
      }

      &:after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        content: '';
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transform: translateY(250%);
        transform: translateY(250%);
      }
    }
  }

</style>
