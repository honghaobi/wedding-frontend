<template>
  <div id="parallax-world-of-ugg">

    <section>
      <div class="title"></div>
    </section>
    <section>
      <div class="parallax-one">
        <h2>Travel</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character">A</span>
          ttending destination wedding can an hassle, especially traveling internationally. We want to help you along the way and make this process as
          easy as possible! We have some travel information below that can help you navigate when and how to book flights. Shuttle information is on
          the FAQ page, if you need assistance setting that up! Always, if you have questions please feel free to reach out to us.
        </p>

        <h3 class="md-subheader">Hopper App</h3>
        <p>
          Download the ‘Hopper’ app in the Google Play or Apple Store. It’s a free app that tracks current prices of flights and will give you
          predictions when the best time to book is. Select a flight that you want to watch pricing for and you will get notifications when the price
          increases or drops. They have a 96% accuracy rating. They do not contract with Alaska so if you plan to fly with them, please check their
          site for price changes.
        </p>

        <h3 class="md-subheader">Alaska Airline Discount Code</h3>
        <p>
          You can book your flights through Alaska airline using our discount code <span class="discountCode"> ECMC181 </span> for 5-7% off! We know
          it's not much, but any little bit helps.
        </p>
        <p>
          To use your Discount Code, go online to <a href="https://www.alaskaair.com/" target="_blank">alaskaair.com</a> On the main booking page
          there is an option to select ‘use discount code or companion fare code” and input the Discount Code. The discount will automatically be
          applied to the prices to any flight to cabo from any airport. By clicking the “?” next to the discount code box after entering the code you
          may view a detailed description of the rules and restrictions. We are contacting other Airlines to get other coupon code and group travel
          discounts, so please check back on this page to look for more ways to save.
        </p>

        <h3 class="md-subheader"> Car Rentals</h3>
        <p>
          We honestly don’t feel that renting a car is necessary. If you have a group it’s cheap to get a shuttle or taxi into town. The hotel can
          easily hail you a cab. Mexico doesn’t have Uber so for getting home you will have to hail a cab back yourself. But parking downtown can be a
          hassle as well. However, if you decide you want a car we strongly strongly recommend you get insurance. You may be able to extend your
          current insurance into Mexico (not really sure if it works that way but worth a shot). Otherwise we will be providing transportation to a
          number of the events from the blocked resort and from Acre, to and from the town for a night out.
        </p>
      </div>
    </section>

    <section>
      <div class="parallax-two">
        <h2>Can't Wait</h2>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'FAQ',
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;

  #main {
    width: 100%;
    padding: 0;
  }

  .md-subheader {
    padding: 0;
  }

  .discountCode {
    color: $accent-color;
    background-color: $primary-color;
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

  .margin-top-30 {
    padding-top: 30px;
  }

  .margin-bottom-30 {
    padding-bottom: 30px;
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
      z-index: 2;
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
      font-family: $font_family_2;
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

    //TODO: mobile background-attachment: fixed; not working
    .parallax-one {
      padding-top: 250px;
      padding-bottom: 250px;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-image: url("./../assets/photos/hk/5.jpg");
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
      background-image: url("./../assets/photos/hk/13.jpg");
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
      background-image: url("./../assets/photos/hk/12.jpg");
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
      background-image: url("./../assets/photos/hk/15.jpg");
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
    color: $primary-color-shade-2;
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-family: $font_family_2;
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

      .parallax-five {
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

</style>
