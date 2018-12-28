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
        <p><span class="first-character primaryColor">W</span>
          e have our room block through Garza Blanca Resort. It’s pretty epic if you ask us. It’s an optional all-inclusive resort located right in
          the middle of Cabo and San Jose. It’s a brand new 5 star luxury resort, but we have an insane deal because we got our room block while they
          were still under construction. The booking rates at Garza are on par with other all-inclusive rates.This is where we will be staying along
          with our families and bridal party. This is also where we will have our events like the “welcome party”, pick up, drop off on the day of the
          wedding and a brunch pool party for the day after the wedding. We would love for you all to stay here with is so we can maximize the time we
          get spend with you all. That being said, feel free to stay other places based on your preferences and needs. We have other suggestions for
          your stay below. For those of you that do not what all-inclusive is, it means everything is included (drinks, meals, snacks, booze, tips to
          the waiters/bartenders). The European plan is room only and you will then have to pay for your food, drinks, tips, etc..If you do decide to
          stay at Garza Blanca with us, please make sure you book using the link at the bottom of your screen to ensure you get our discounted rate
          and the resort knows that you are part of our wedding festivities. Also, don’t forget to check out the FAQ page for more info/questions
          about the resort</p>
        <h3>How long should we stay?</h3>
        <p>
          Good question!! Big reason why we picked Cabo is because we want to make this experience a vacation for y'all! We have our room block rate
          locked from June 16th - June 25th. With that being said, we will have planned events from June 19th to June 22nd, assumming people are
          flying out on the Sunday the 23rd. So stay as long as your heart desire and
        </p>
        <RoomsCarousel/>
      </div>
    </section>

    <section>
      <div class="parallax-two">
        <h2>Room Block Rates</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <RoomsTable/>
      </div>
    </section>

    <section>
      <div class="parallax-three">
        <h2>Other Options</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <md-card>
          <md-card-media>
            <img src="../assets/photos/other/palmar.jpg"/>
          </md-card-media>

          <md-card-header>
            <div class="md-title">Villa Del Palmar Resort</div>
            <div class="md-subhead">Optional All-Inclusive</div>
          </md-card-header>

          <md-card-actions>
            <md-button @click="newTabToLink(palmarURL)" class="md-accent md-dense md-raised">Link</md-button>
          </md-card-actions>

          <md-card-content>
            Villa Del Palmar is also optional and all-inclusive as well. This resort is a cheaper option in Cabo. Although, it’s about
            20 minutes away from our resort, and about 40 minutes from the Venue. Keep in mind the shuttles for the wedding day will be picking up and
            dropping off at Garza. Visit the website for up to date booking rates.
          </md-card-content>
        </md-card>
        <md-card>
          <md-card-media>
            <img src="../assets/photos/other/villa.jpg"/>
          </md-card-media>

          <md-card-header>
            <div class="md-title">AirBnB</div>
            <div class="md-subhead">Condos & Villas</div>
          </md-card-header>

          <md-card-actions>
            <md-button @click="newTabToLink(airbnbURL)" class="md-accent md-dense md-raised">Link</md-button>
          </md-card-actions>

          <md-card-content>
            You can check out AirBnB for condos or villa in all price ranges. If you choose to do this they are mostly located in either in Cabo San
            Lucas or San Jose del Cabo. San Jose del Cabo is closer to our wedding venue, and Cabo San Lucas is downtown Cabo closer to the tourist
            attractions.
          </md-card-content>
        </md-card>
      </div>
    </section>

    <section>
      <div class="parallax-four">
        <h2>ROOF TOP POOL</h2>
      </div>
    </section>
    <md-button class="md-primary md-raised" id="bookBtn" @click="newTabToLink(garzaWeddingURL)">
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
    data: () => ({
      airbnbURL: 'https://www.airbnb.com/',
      palmarURL: 'https://cabo.villadelpalmar.com/',
      garzaWeddingURL: 'https://cabo.garzablancaresort.com/wedding-groups/kelli-and-henry-bi-wedding',
    }),
    methods: {
      newTabToLink(linkURL) {
        window.open(linkURL, '_blank');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";
  @import "../css/animation.scss";

  $font_family_1: 'Oswald', sans-serif;

  .primaryColor {
    color: $primary-color;
  }

  #main {
    width: 100%;
    padding: 0;
  }

  .content-asset {
    p {
      margin: 0 auto;
    }
  }

  .md-card {
    min-width: 260px;
    max-width: 330px;
    margin: 10px;
    display: inline-block;
    vertical-align: top;
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
      color: $accent-color;
      padding: 0;
      margin: 0;
    }

    h2 {
      font-family: $font_family_1;
      font-size: 70px;
      letter-spacing: 10px;
      text-align: center;
      color: $white;
      font-weight: 400;
      text-transform: uppercase;
      z-index: 10;
      opacity: .9;
    }

    h3 {
      font-family: $font_family_1;
      font-size: 14px;
      text-align: left;
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $primary-color-shade-2;
    }

    p {
      color: $accent-color;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    .title {
      background: $white;
      padding: 40px;
      margin: 0 auto;
      text-align: center;

      #logo {
        width: 100px;
      }
    }

    .block {
      background: $white;
      padding: 60px;
      width: 820px;
      margin: 0 auto;
      text-align: justify;
    }

    .block-gray {
      background: #C7D6DC;
      padding: 60px;
    }

    .section-overlay-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $black;
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
      border-bottom: 1px solid $accent-color;
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
    z-index: 2;
    white-space: normal;

    :hover {
      -webkit-animation: neon1 2s ease-in-out infinite alternate;
      -moz-animation: neon1 2s ease-in-out infinite alternate;
      animation: neon1 2s ease-in-out infinite alternate;
    }
  }


  @media screen and (max-width: 479px) {
    #bookBtn {
      height: 60px;
    }
  }

</style>
