<template>
  <div id="parallax-world-of-ugg">

    <section>
      <div class="title"></div>
    </section>
    <section>
      <div class="parallax-one">
        <h2>Garza Blanca</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character sc">I</span>
          n 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell
          in love with the sheepskin experience and was convinced the world would one day share this love.
          The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a
          lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began
          selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand
          became a symbol of relaxed southern California culture, gaining momentum through surf shops and
          other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached
          beyond the beach, popping up in big cities and small towns all over, and in every level of
          society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When
          winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.</p>
        <RoomsCarousel/>
      </div>
    </section>

    <section>
      <div class="parallax-two">
        <h2>Booking</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <RoomsTable/>
        <p class="line-break margin-top-10"></p>
      </div>
    </section>

    <section>
      <div class="parallax-three">
        <h2>ENCHANTED FOREST</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character atw">W</span>
          hen the New York fashion community notices your brand, the world soon follows. The widespread
          love for UGG extended to Europe in the mid-2000's along with the stylish casual movement and
          demand for premium casual fashion. UGG boots and shoes were now seen walking the streets of
          London, Paris and Amsterdam with regularity. To meet the rising demand from new fans, UGG opened
          flagship stores in the UK and an additional location in Moscow. As the love spread farther East,
          concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an international
          brand that is loved by all. This love is a result of a magical combination of the amazing
          functional benefits of sheepskin and the heightened emotional feeling you get when you slip them
          on your feet. In short, you just feel better all over when you wear UGG boots, slippers, and
          shoes.</p>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10">
          In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with
          new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady,
          UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world
          of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the
          reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to
          spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey
          continues on and the love for UGG continues to spread.</p>
      </div>
    </section>

    <section>
      <div class="parallax-four">
        <h2>ROOF TOP POOL</h2>
      </div>
    </section>
    <md-button class="md-primary md-raised" id="bookBtn" @click="goToBookingLink">
      Click Here To Book the Resort With Our Discounted Price
    </md-button>
  </div>
</template>
<script>

  import RoomsCarousel from './RoomsCarousel';
  import RoomsTable from './ResortTable';

  export default {
    name: 'Resort',
    components: {
      RoomsCarousel,
      RoomsTable
    },
    methods: {
      goToBookingLink() {
        window.open("https://cabo.garzablancaresort.com/wedding-groups/kelli-and-henry-bi-wedding", '_blank');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $color_1: black;
  $color_2: white;
  $color_3: #3b8595;
  $color_4: #3d3c3a;
  $color_5: #c48660;
  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;
  $background_color_1: black;

  #main {
    width: 100%;
    padding: 0;
  }

  .content-asset {
    p {
      margin: 0 auto;
    }
  }

  .breadcrumb {
    display: none;
  }

  .margin-top-10 {
    padding-top: 10px;
  }

  .margin-bot-10 {
    padding-bottom: 10px;
  }

  #parallax-world-of-ugg {
    h1 {
      font-family: $font_family_1;
      font-size: 24px;
      font-weight: 400;
      text-transform: uppercase;
      color: $color_1;
      padding: 0;
      margin: 0;
    }

    h2 {
      font-family: $font_family_1;
      font-size: 70px;
      letter-spacing: 10px;
      text-align: center;
      color: $color_2;
      font-weight: 400;
      text-transform: uppercase;
      z-index: 10;
      opacity: .9;
    }

    h3 {
      font-family: $font_family_1;
      font-size: 14px;
      line-height: 0;
      font-weight: 400;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: $color_1;
    }

    p {
      font-family: $font_family_2;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    .title {
      background: white;
      padding: 40px;
      margin: 0 auto;
      text-align: center;

      #logo {
        width: 100px;
      }
    }

    .block {
      background: white;
      padding: 60px;
      width: 820px;
      margin: 0 auto;
      text-align: justify;
    }

    .block-gray {
      background: #f2f2f2;
      padding: 60px;
    }

    .section-overlay-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $background_color_1;
      opacity: 0.70;
    }

    .parallax-one {
      padding-top: 250px;
      padding-bottom: 250px;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-image: url("./../assets/photos/garza/overview1.jpg");
      background-attachment: fixed;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-repeat: no-repeat;
      background-position: top center;
    }

    .parallax-two {
      padding-top: 200px;
      padding-bottom: 200px;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-image: url("./../assets/photos/garza/overview2.jpg");
      background-attachment: fixed;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .parallax-three {
      padding-top: 200px;
      padding-bottom: 200px;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-image: url("./../assets/photos/garza/overview3.jpg");
      background-attachment: fixed;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .parallax-four {
      padding-top: 200px;
      padding-bottom: 200px;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-image: url("./../assets/photos/garza/overview4.jpg");
      background-attachment: fixed;
      background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .line-break {
      border-bottom: 1px solid black;
      width: 150px;
      margin: 0 auto;
    }
  }

  .first-character {
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-family: $font_family_2;
  }

  .sc {
    color: $color_3;
  }

  .ny {
    color: $color_4;
  }

  .atw {
    color: $color_5;
  }

  @media screen and (max-width: 959px) and (min-width: 768px) {
    #parallax-world-of-ugg {
      .block {
        padding: 40px;
        width: 620px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    #parallax-world-of-ugg {
      .block {
        padding: 30px;
        width: 100%;
        padding: 30px;
      }

      h2 {
        font-size: 30px;
      }

      .parallax-one {
        padding-top: 200px;
        padding-bottom: 200px;
        background-attachment: scroll;
      }

      .parallax-two {
        padding-top: 200px;
        padding-bottom: 200px;
        background-attachment: scroll;
      }

      .parallax-three {
        padding-top: 200px;
        padding-bottom: 200px;
        background-attachment: scroll;
      }

      .parallax-four {
        padding-top: 200px;
        padding-bottom: 200px;
        background-attachment: scroll;
      }
    }
  }

  @media screen and (max-width: 479px) {
    #parallax-world-of-ugg {
      .block {
        padding: 30px 15px;
        width: 100%;
      }
    }
  }

  #bookBtn {
    height: 40px;
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    bottom: 0;
    padding: 5px;
    width: 100vw;
    text-align: center;
    margin: auto;
    color: $white;
    z-index: 9;
    white-space: normal;
  }

  @media screen and (max-width: 479px) {
    #bookBtn{
      height: 60px;
    }
  }

</style>
