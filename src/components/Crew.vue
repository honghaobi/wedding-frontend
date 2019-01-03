<template>
  <div>
    <section class="content">
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/brian1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Brian James</h3>
            <p class="tilter__description">Officiant</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/steph1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Stephanie Mckeown</h3>
            <p class="tilter__description">Maid of Honor</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/will1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Will Schumaker</h3>
            <p class="tilter__description">Best Man</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/brooke1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Brooklyn Nelson</h3>
            <p class="tilter__description">Bridesmaid</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/riley1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Riley Brazil</h3>
            <p class="tilter__description">Groomsman</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/sam1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Samantha Lyon</h3>
            <p class="tilter__description">Bridesmaid</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
      <span class="tilter tilter--5">
        <figure class="tilter__figure">
          <img class="tilter__image" src="./../assets/photos/crew/stu1.jpg"/>
          <div class="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption class="tilter__caption">
            <h3 class="tilter__title">Stuart Anderson</h3>
            <p class="tilter__description">Groomsman</p>
          </figcaption>
          <svg class="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
            <path d="M20.5,20.5h260v375h-260V20.5z"/>
          </svg>
        </figure>
      </span>
    </section>
  </div>
</template>

<script>
  import anime from './../js/anime.min.js';

  export default {
    name: 'Crew',
    mounted() {
      // Helper vars and functions.
      function extend(a, b) {
        for ( var key in b ) {
          if ( b.hasOwnProperty(key) ) {
            a[key] = b[key];
          }
        }
        return a;
      }

      // from http://www.quirksmode.org/js/events_properties.html#position
      function getMousePos(e) {
        var posx = 0,
          posy = 0;
        if ( !e ) var e = window.event;
        if ( e.pageX || e.pageY ) {
          posx = e.pageX;
          posy = e.pageY;
        } else if ( e.clientX || e.clientY ) {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return {
          x: posx,
          y: posy
        };
      }

      /**
       * TiltFx obj.
       */
      function TiltFx(el, options) {
        this.DOM = {};
        this.DOM.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
      }

      TiltFx.prototype.options = {
        movement: {
          imgWrapper: {
            translation: {
              x: 0,
              y: 0,
              z: 0
            },
            rotation: {
              x: -5,
              y: 5,
              z: 0
            },
            reverseAnimation: {
              duration: 1200,
              easing: 'easeOutElastic',
              elasticity: 600
            }
          },
          lines: {
            translation: {
              x: 10,
              y: 10,
              z: [0, 10]
            },
            reverseAnimation: {
              duration: 1000,
              easing: 'easeOutExpo',
              elasticity: 600
            }
          },
          caption: {
            translation: {
              x: 20,
              y: 20,
              z: 0
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            reverseAnimation: {
              duration: 1500,
              easing: 'easeOutElastic',
              elasticity: 600
            }
          },
          /*
          overlay : {
            translation : {x: 10, y: 10, z: [0,50]},
            reverseAnimation : {
              duration : 500,
              easing : 'easeOutExpo'
            }
          },
          */
          shine: {
            translation: {
              x: 50,
              y: 50,
              z: 0
            },
            reverseAnimation: {
              duration: 1200,
              easing: 'easeOutElastic',
              elasticity: 600
            }
          }
        }
      };

      /**
       * Init.
       */
      TiltFx.prototype._init = function () {
        this.DOM.animatable = {};
        this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
        this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
        this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
        this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
        this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
        this._initEvents();
      };

      /**
       * Init/Bind events.
       */
      TiltFx.prototype._initEvents = function () {
        var self = this;

        this.mouseenterFn = function () {
          for ( var key in self.DOM.animatable ) {
            anime.remove(self.DOM.animatable[key]);
          }
        };

        this.mousemoveFn = function (ev) {
          requestAnimationFrame(function () {
            self._layout(ev);
          });
        };

        this.mouseleaveFn = function (ev) {
          requestAnimationFrame(function () {
            for ( var key in self.DOM.animatable ) {
              if ( self.options.movement[key] == undefined ) {
                continue;
              }
              anime({
                      targets: self.DOM.animatable[key],
                      duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0
                                                                                         : 1,
                      easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing
                                                                                         || 'linear' : 'linear',
                      elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity
                                                                                             || null : null,
                      scaleX: 1,
                      scaleY: 1,
                      scaleZ: 1,
                      translateX: 0,
                      translateY: 0,
                      translateZ: 0,
                      rotateX: 0,
                      rotateY: 0,
                      rotateZ: 0
                    });
            }
          });
        };

        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
      };

      TiltFx.prototype._layout = function (ev) {
        // Mouse position relative to the document.
        var mousepos = getMousePos(ev),
          // Document scrolls.
          docScrolls = {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
          },
          bounds = this.DOM.el.getBoundingClientRect(),
          // Mouse position relative to the main element (this.DOM.el).
          relmousepos = {
            x: mousepos.x - bounds.left - docScrolls.left,
            y: mousepos.y - bounds.top - docScrolls.top
          };

        // Movement settings for the animatable elements.
        for ( var key in this.DOM.animatable ) {
          if ( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
            continue;
          }
          var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {
              x: 0,
              y: 0,
              z: 0
            } : {
              x: 0,
              y: 0,
              z: 0
            },
            r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {
              x: 0,
              y: 0,
              z: 0
            } : {
              x: 0,
              y: 0,
              z: 0
            },
            setRange = function (obj) {
              for ( var k in obj ) {
                if ( obj[k] == undefined ) {
                  obj[k] = [0, 0];
                } else if ( typeof obj[k] === 'number' ) {
                  obj[k] = [-1 * obj[k], obj[k]];
                }
              }
            };

          setRange(t);
          setRange(r);

          var transforms = {
            translation: {
              x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
              y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
              z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0],
            },
            rotation: {
              x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
              y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
              z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
            }
          };

          this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x
                                                                                                      + 'px) translateY(' + transforms.translation.y
                                                                                                      + 'px) translateZ(' + transforms.translation.z
                                                                                                      + 'px) rotateX(' + transforms.rotation.x
                                                                                                      + 'deg) rotateY(' + transforms.rotation.y
                                                                                                      + 'deg) rotateZ(' + transforms.rotation.z
                                                                                                      + 'deg)';
        }
      };

      var tiltSettings = [
        {},
        {
          movement: {
            imgWrapper: {
              translation: {
                x: 10,
                y: 10,
                z: 30
              },
              rotation: {
                x: 0,
                y: -10,
                z: 0
              },
              reverseAnimation: {
                duration: 200,
                easing: 'easeOutQuad'
              }
            },
            lines: {
              translation: {
                x: 10,
                y: 10,
                z: [0, 70]
              },
              rotation: {
                x: 0,
                y: 0,
                z: -2
              },
              reverseAnimation: {
                duration: 2000,
                easing: 'easeOutExpo'
              }
            },
            caption: {
              rotation: {
                x: 0,
                y: 0,
                z: 2
              },
              reverseAnimation: {
                duration: 200,
                easing: 'easeOutQuad'
              }
            },
            overlay: {
              translation: {
                x: 10,
                y: -10,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: 2
              },
              reverseAnimation: {
                duration: 2000,
                easing: 'easeOutExpo'
              }
            },
            shine: {
              translation: {
                x: 100,
                y: 100,
                z: 0
              },
              reverseAnimation: {
                duration: 200,
                easing: 'easeOutQuad'
              }
            }
          }
        },
        {
          movement: {
            imgWrapper: {
              rotation: {
                x: -5,
                y: 10,
                z: 0
              },
              reverseAnimation: {
                duration: 900,
                easing: 'easeOutCubic'
              }
            },
            caption: {
              translation: {
                x: 30,
                y: 30,
                z: [0, 40]
              },
              rotation: {
                x: [0, 15],
                y: 0,
                z: 0
              },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutExpo'
              }
            },
            overlay: {
              translation: {
                x: 10,
                y: 10,
                z: [0, 20]
              },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutExpo'
              }
            },
            shine: {
              translation: {
                x: 100,
                y: 100,
                z: 0
              },
              reverseAnimation: {
                duration: 900,
                easing: 'easeOutCubic'
              }
            }
          }
        },
        {
          movement: {
            imgWrapper: {
              rotation: {
                x: -5,
                y: 10,
                z: 0
              },
              reverseAnimation: {
                duration: 50,
                easing: 'easeOutQuad'
              }
            },
            caption: {
              translation: {
                x: 20,
                y: 20,
                z: 0
              },
              reverseAnimation: {
                duration: 200,
                easing: 'easeOutQuad'
              }
            },
            overlay: {
              translation: {
                x: 5,
                y: -5,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: 6
              },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutQuad'
              }
            },
            shine: {
              translation: {
                x: 50,
                y: 50,
                z: 0
              },
              reverseAnimation: {
                duration: 50,
                easing: 'easeOutQuad'
              }
            }
          }
        },
        {
          movement: {
            imgWrapper: {
              translation: {
                x: 0,
                y: -8,
                z: 0
              },
              rotation: {
                x: 3,
                y: 3,
                z: 0
              },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutExpo'
              }
            },
            lines: {
              translation: {
                x: 15,
                y: 15,
                z: [0, 15]
              },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutExpo'
              }
            },
            overlay: {
              translation: {
                x: 0,
                y: 8,
                z: 0
              },
              reverseAnimation: {
                duration: 600,
                easing: 'easeOutExpo'
              }
            },
            caption: {
              translation: {
                x: 10,
                y: -15,
                z: 0
              },
              reverseAnimation: {
                duration: 900,
                easing: 'easeOutExpo'
              }
            },
            shine: {
              translation: {
                x: 50,
                y: 50,
                z: 0
              },
              reverseAnimation: {
                duration: 1200,
                easing: 'easeOutExpo'
              }
            }
          }
        },
        {
          movement: {
            lines: {
              translation: {
                x: -5,
                y: 5,
                z: 0
              },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutExpo'
              }
            },
            caption: {
              translation: {
                x: 15,
                y: 15,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: 3
              },
              reverseAnimation: {
                duration: 1500,
                easing: 'easeOutElastic',
                elasticity: 700
              }
            },
            overlay: {
              translation: {
                x: 15,
                y: -15,
                z: 0
              },
              reverseAnimation: {
                duration: 500,
                easing: 'easeOutExpo'
              }
            },
            shine: {
              translation: {
                x: 50,
                y: 50,
                z: 0
              },
              reverseAnimation: {
                duration: 500,
                easing: 'easeOutExpo'
              }
            }
          }
        },
        {
          movement: {
            imgWrapper: {
              translation: {
                x: 5,
                y: 5,
                z: 0
              },
              reverseAnimation: {
                duration: 800,
                easing: 'easeOutQuart'
              }
            },
            caption: {
              translation: {
                x: 10,
                y: 10,
                z: [0, 50]
              },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutQuart'
              }
            },
            shine: {
              translation: {
                x: 50,
                y: 50,
                z: 0
              },
              reverseAnimation: {
                duration: 800,
                easing: 'easeOutQuart'
              }
            }
          }
        },
        {
          movement: {
            lines: {
              translation: {
                x: 40,
                y: 40,
                z: 0
              },
              reverseAnimation: {
                duration: 1500,
                easing: 'easeOutElastic'
              }
            },
            caption: {
              translation: {
                x: 20,
                y: 20,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: -5
              },
              reverseAnimation: {
                duration: 1000,
                easing: 'easeOutExpo'
              }
            },
            overlay: {
              translation: {
                x: -30,
                y: -30,
                z: 0
              },
              rotation: {
                x: 0,
                y: 0,
                z: 3
              },
              reverseAnimation: {
                duration: 750,
                easing: 'easeOutExpo'
              }
            },
            shine: {
              translation: {
                x: 100,
                y: 100,
                z: 0
              },
              reverseAnimation: {
                duration: 750,
                easing: 'easeOutExpo'
              }
            }
          }
        }
      ];

      function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('span.tilter'))
          .forEach(function (el, pos) {
            // idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[6]);
          });
      }

      init();
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  section {
    display: flex;
    background-image: url("./../assets/photos/crew/crew-bg.png");
    background-size: 500px 500px;
    background-repeat: repeat;
    justify-items: center;
    flex-wrap: wrap;
    padding: 1.5em;
  }

  .tilter {
    display: block;
    position: relative;
    width: 280px;
    height: 387px;
    margin: 1.5em 1.5em;
    color: #fff;
    flex: none;
    perspective: 1000px;

    * {
      pointer-events: none;
    }

    &:hover, &:focus {
      color: $primary-color;
      text-shadow: 2px 2px 5px rgba($accent-color, 0.5);
      outline: none;
    }
  }

  @media only screen and (max-device-width: 480px) {
    section {
      padding-top: 2em;
    }

    .tilter {
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }

  /*
  .tilter__figure,
  .tilter__deco,
  .tilter__caption {
    will-change: transform;
  }*/

  .tilter__figure, .tilter__image {
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .tilter__figure > * {
    transform: translateZ(0px);
    /* Force correct stacking order */
  }

  .smooth {
    .tilter__figure, .tilter__deco--overlay, .tilter__deco--lines, .tilter__deco--shine div, .tilter__caption {
      transition: transform 0.2s ease-out;
    }
  }

  .tilter__figure {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 90%;
      height: 90%;
      top: 5%;
      left: 5%;
      box-shadow: 0 30px 20px rgba(35, 32, 39, 0.5);
    }
  }

  .tilter__deco {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .tilter__deco--overlay {
    background-image: linear-gradient(45deg, rgba(226, 60, 99, 0.4), rgba(145, 58, 252, 0.4), rgba(16, 11, 192, 0.4));
  }

  .tilter__deco--shine div {
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  }

  .tilter__deco--lines {
    fill: none;
    stroke: #fff;
    stroke-width: 1.5px;
  }

  .tilter__caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 4em;
  }

  .tilter__title {
    margin: 0;
    font-weight: normal;
    font-size: 2.5em;
    font-family: 'Abril Fatface', serif;
    line-height: 1;
  }

  .tilter__description {
    margin: 1em 0 0 0;
    font-size: 0.85em;
    letter-spacing: 0.15em;
  }

  /* Individual styles */

  /* Example 1 (Default) */

  .tilter--1 .tilter__figure::before {
    box-shadow: 0 30px 20px rgba(0, 0, 0, 0.5);
  }

  /* Example 2 (thicker lines, overlay) */

  .tilter--2 {
    color: #2e27ad;

    &:hover, &:focus {
      color: #2e27ad;
    }

    .tilter__deco--overlay {
      background-image: linear-gradient(45deg, rgba(245, 239, 40, 0.6), rgba(164, 22, 169, 0.6));
    }

    .tilter__deco--lines {
      stroke: #2e27ad;
      stroke-width: 4px;
    }
  }

  /* Example 3 (no lines, overlay hard-light) */

  .tilter--3 {
    .tilter__deco--overlay {
      background-image: linear-gradient(45deg, rgba(205, 81, 220, 0.6), rgba(41, 94, 230, 0.5));
    }

    .tilter__caption {
      padding: 2em;
      text-align: right;
      text-shadow: 0.1em 0.8em 1em rgba(0, 0, 0, 0.35);
    }
  }

  /* Example 4 (caption sliding in) */

  .tilter--4 .tilter__deco--overlay {
    background-image: linear-gradient(20deg, rgb(214, 100, 40), rgba(46, 39, 173, 0.58), rgba(53, 74, 165, 0.6));
  }

  @media screen and (min-width: 30em) {
    .tilter--4 {
      .tilter__deco--lines {
        transform: scale3d(0.8, 0.8, 1);
        transition: transform 0.4s;
      }

      &:hover .tilter__deco--lines {
        transform: scale3d(1, 1, 1);
      }

      .tilter__title, .tilter__description {
        transform: translate3d(0, 80px, 0);
        opacity: 0;
        transition: transform 0.4s, opacity 0.4s;
      }

      &:hover {
        .tilter__description {
          transition-delay: 0.1s;
        }

        .tilter__title, .tilter__description {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }
    }
  }

  /* Example 5 (line animating) */

  .tilter--5 {
    .tilter__deco--lines path {
      stroke-dasharray: 1270;
      stroke-dashoffset: 1270;
      transition: stroke-dashoffset 1s;
    }

    &:hover .tilter__deco--lines path {
      stroke-dashoffset: 0;
    }

    .tilter__figure::before {
      box-shadow: 0 30px 20px rgba($accent-color, 0.4);
    }
  }

  /* Example 6 (different line position) */

  .tilter--6 {
    color: #2e27ad;

    &:hover, &:focus {
      color: #2e27ad;
    }

    .tilter__deco--overlay {
      background-image: linear-gradient(45deg, rgba(46, 39, 173, 0.2), rgba(255, 186, 59, 0.58));
    }

    .tilter__deco--lines {
      stroke: #2e27ad;
      stroke-width: 6px;
      top: -50px;
      left: -50px;
    }

    .tilter__caption {
      padding: 0 4em 5.5em 1em;
    }

    .tilter__figure::before {
      box-shadow: none;
    }
  }

  /* Example 7 (different line) */

  .tilter--7 {
    .tilter__deco--overlay {
      background-image: linear-gradient(45deg, rgba(93, 203, 106, 0.48), rgba(59, 239, 255, 0.58));
    }

    .tilter__deco--lines {
      stroke-width: 20px;
      transform: scale3d(0.9, 0.9, 1);
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
    }

    &:hover .tilter__deco--lines {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }

    .tilter__figure::before {
      box-shadow: none;
    }
  }

  /* Example 8 (different line) */

  .tilter--8 {
    perspective: none;

    .tilter__figure {
      transform-style: flat;
    }

    .tilter__deco--lines {
      stroke: #9255ae;
      stroke-width: 6px;
      mix-blend-mode: color-burn;
    }

    .tilter__caption {
      color: #9255ae;
      mix-blend-mode: color-burn;
    }

    .tilter__figure::before {
      box-shadow: none;
    }
  }
</style>

