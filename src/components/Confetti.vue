<template>
  <div>

  </div>
</template>

<script>
  import confetti from '../assets/images/confetti_sprites.png';

  export default {
    name: 'Confetti',
    mounted() {

      const myAnimationDuration = 5000;

      const myListOfColors = [
        '#FFEFE9',
        '#FCEEC9',
        '#F6B670',
        '#99DBD3',
        '#31CDB3',
        '#40A195',
        '#104954',
        '#132237'
      ];

      function loadDesign() {
        let myWidth = 0,
          myHeight = 0;
        if ( typeof (window.innerWidth) == 'number' ) {
          //Non-IE
          myWidth = window.innerWidth;
          myHeight = window.innerHeight;
        } else if ( document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ) {
          //IE 6+ in 'standards compliant mode'
          myWidth = document.documentElement.clientWidth;
          myHeight = document.documentElement.clientHeight;
        } else if ( document.body && (document.body.clientWidth || document.body.clientHeight) ) {
          //IE 4 compatible
          myWidth = document.body.clientWidth;
          myHeight = document.body.clientHeight;
        }

        ////////////////////
        // setup canvas ////
        ////////////////////

        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'composite_canvas');
        canvas.width = myWidth;
        canvas.height = myHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '0px';
        canvas.style.left = '0px';

        document.body.appendChild(canvas);

        ///////////////////////////////
        // load sprite sheet image ////
        ///////////////////////////////

        const img = new Image();
        img.onload = function () {
          setupAnimation(this);
        };
        img.src = confetti;
      };

      function setupAnimation(aSpriteSheetImage) {
        const particles = setupParticles(aSpriteSheetImage);

        const easeIn = function (start, delta, time, endTime) {
          time /= endTime;
          return (delta * time * time) + start;
        };

        let startTime = new Date().getTime(),
          lastRenderTime = -20,
          totalLapsedTime = 0,
          frameLapseTime = 0,
          frameAlpha = 1,
          fadeDuration = 900,
          fadeStartTime = myAnimationDuration - fadeDuration;

        let motionY,
          motionX,
          i;

        const canvas = document.getElementById('composite_canvas'),
          ctx = canvas.getContext('2d');

        const renderFrame = function () {
          totalLapsedTime = new Date().getTime() - startTime;
          frameLapseTime = totalLapsedTime - lastRenderTime;
          lastRenderTime = totalLapsedTime;

          if ( totalLapsedTime > fadeStartTime ) {
            frameAlpha = Math.max(easeIn(1, -1, totalLapsedTime - fadeStartTime, fadeDuration), 0);
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // ctx.globalAlpha = frameAlpha;
          canvas.style.opacity = frameAlpha;

          const dontRespawn = totalLapsedTime > myAnimationDuration / 2;

          motionY = particles.motionY * frameLapseTime;
          motionX = particles.motionX * frameLapseTime;

          for ( i = 0; i < particles.planes.length; i++ ) {
            drawParticlePlane(totalLapsedTime, motionX, motionY, particles, i, ctx, dontRespawn);
          }

          if ( totalLapsedTime < myAnimationDuration ) {
            window.requestAnimationFrame(renderFrame);
          } else {
            canvas.parentNode.removeChild(canvas);
          }
        };

        renderFrame();

      };

      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////
      // P A R T I C L E // S T U F F //////////////////////////
      //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////

      function setupParticles(aSpriteSheetImage) {
        const canvas = document.getElementById('composite_canvas');

        const particles = {
          config: [
            {
              numberOfParticles: 150,
              minParticleScale: 0.8,
              maxParticleScale: 0.5,
              x1: 0,
              y1: -0.2,
              x2: 1,
              y2: 1.2
            },
            {
              numberOfParticles: 150,
              minParticleScale: 0.5,
              maxParticleScale: 0.3,
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 1
            },
            {
              numberOfParticles: 300,
              minParticleScale: 0.2,
              maxParticleScale: 0.1,
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 1
            }],
          planes: [],
          spriteObjects: [],
          motionX: 0.1,
          motionY: 0.6
        };

        const particleSpriteObject = {
          frameWidth: 100,
          frameHeight: 100,
          colorSheets: [],
          spriteLocationMap: [{
            x: 0,
            y: 0
          }, {
            x: 1000,
            y: 0
          }, {
            x: 200,
            y: 0
          }, {
            x: 300,
            y: 0
          }, {
            x: 400,
            y: 0
          }, {
            x: 500,
            y: 0
          }, {
            x: 600,
            y: 0
          }, {
            x: 700,
            y: 0
          }]
        };

        const particleColors = myListOfColors;
        const theParticleSpriteImage = aSpriteSheetImage;

        particleColors.forEach(function (color) {
          const imgCopy = document.createElement('canvas'),
            imgCopyContext = imgCopy.getContext('2d');
          imgCopy.width = theParticleSpriteImage.width;
          imgCopy.height = theParticleSpriteImage.height;

          imgCopyContext.drawImage(theParticleSpriteImage, 0, 0);
          imgCopyContext.fillStyle = color;
          imgCopyContext.globalCompositeOperation = 'source-atop';
          imgCopyContext.fillRect(0, 0, imgCopy.width, imgCopy.height);

          particleSpriteObject.colorSheets.push(imgCopy);
        });
        particles.spriteObjects.push(particleSpriteObject);

        particles.config.forEach(function (config, index) {
          const plane = [];
          const bounds = {
            x1: canvas.width * config.x1,
            x2: canvas.width * config.x2,
            y1: canvas.height * config.y1,
            y2: canvas.height * config.y2
          };
          for ( let p = 0; p < config.numberOfParticles; p++ ) {
            const spriteObjIdx = p % particles.spriteObjects.length,
              spriteObj = particles.spriteObjects[spriteObjIdx],
              s = Math.range(config.minParticleScale, config.maxParticleScale),
              y = Math.range(bounds.y1 - (spriteObj.frameHeight * s) - bounds.y2, bounds.y1 - (spriteObj.frameHeight * s));

            plane.push({
                         x: Math.range(bounds.x1 - (spriteObj.frameWidth * s), bounds.x2),
                         y: y,
                         r: Math.range(0, 6),
                         rotationRate: Math.range(-0.2, 0.2),
                         scale: s,
                         lastSpriteFrameUpdateTime: -1,
                         spriteFrameRate: 1000 / 60,
                         spriteFrameIndex: Math.round(Math.range(0, particleSpriteObject.spriteLocationMap.length - 1)),
                         spriteObjectIndex: spriteObjIdx
                       });
          }
          plane.sort(function (a, b) {
            return a.scale - b.scale;
          });
          particles.planes[index] = plane;
          config.bounds = bounds;
        });

        return particles;
      }

      function drawParticlePlane(time, motionX, motionY, particles, planeIndex, destinationContext, dontLoop) {
        const plane = particles.planes[planeIndex],
          bounds = particles.config[planeIndex].bounds;

        for ( let p = 0; p < plane.length; p++ ) {
          const particle = plane[p],
            particleSpriteObject = particles.spriteObjects[particle.spriteObjectIndex],
            spriteSheetImg = particleSpriteObject.colorSheets[p % particleSpriteObject.colorSheets.length],
            pWidth = particleSpriteObject.frameWidth * particle.scale,
            pHeight = particleSpriteObject.frameHeight * particle.scale;

          if ( time - particle.lastSpriteFrameUpdateTime >= particle.spriteFrameRate ) {
            particle.spriteFrameIndex = (particle.spriteFrameIndex + 1) % particleSpriteObject.spriteLocationMap.length;
            particle.lastSpriteFrameUpdateTime = time;
          }
          const spriteAddress = particleSpriteObject.spriteLocationMap[particle.spriteFrameIndex];

          particle.x += motionX * particle.scale;
          particle.y += motionY * particle.scale;
          particle.r += particle.rotationRate;

          destinationContext.translate(particle.x, particle.y);
          destinationContext.rotate(particle.r);

          destinationContext.drawImage(
            spriteSheetImg,
            spriteAddress.x,
            spriteAddress.y,
            particleSpriteObject.frameWidth,
            particleSpriteObject.frameHeight,
            -pWidth / 2,
            -pHeight / 2,
            pWidth / 2, // dividing in half creates a cool flutter effect
            pHeight);

          destinationContext.rotate(-particle.r);
          destinationContext.translate(-particle.x, -particle.y);

          if ( !dontLoop ) {
            if ( particles.motionX > 0 && particle.x > bounds.x2 ) {
              particle.x = bounds.x1 - pWidth;
            } else if ( particles.motionX < 0 && particle.x < bounds.x1 - pWidth ) {
              particle.x = bounds.x2;
            }

            if ( particles.motionY > 0 && particle.y > bounds.y2 ) {
              particle.y = bounds.y1 - pHeight;
            } else if ( particles.motionY < 0 && particle.y < bounds.y1 - pHeight ) {
              particle.y = bounds.y2;
            }
          }
        }
      };

      /////////////////////////////////////////
      /////////////////////////////////////////

      function setupRequestAnimationFrame(aFallbackFrameRate) {
        const theRequestAnimationFrame = window.requestAnimationFrame ||
                                         window.webkitRequestAnimationFrame ||
                                         window.mozRequestAnimationFrame ||
                                         window.oRequestAnimationFrame ||
                                         window.msRequestAnimationFrame;

        const theCancelAnimationFrame = window.cancelAnimationFrame ||
                                        window.webkitCancelAnimationFrame ||
                                        window.mozCancelAnimationFrame ||
                                        window.oCancelAnimationFrame ||
                                        window.msCancelAnimationFrame;

        if ( theRequestAnimationFrame ) {
          window.requestAnimationFrame = theRequestAnimationFrame;
          window.cancelAnimationFrame = theCancelAnimationFrame;
        } else {
          const theFallbackFramerate = aFallbackFrameRate ? aFallbackFrameRate : 60;
          const theTimeoutDuration = 1000 / theFallbackFramerate;
          window.requestAnimationFrame = function (aCallback) {
            const id = window.setTimeout(aCallback, theTimeoutDuration);
            return id;
          };
          window.cancelAnimationFrame = function (anId) {
            clearTimeout(anId);
          };
        }
      }

      setupRequestAnimationFrame();

      /////////////////////////////////////////
      /////////////////////////////////////////

      Math.range = function (min, max) {
        return min + (Math.random() * (max - min));
      };
      loadDesign();
    },
  };
</script>

<style lang="scss" scoped>
</style>
