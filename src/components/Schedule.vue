<template>
  <div class="block">
    <h1>Henry + Kelli Fiesta Weekend Schedule</h1>
    <h2>Wednesday June 19th</h2>
    <h3>Rehearsal Dinner with Bridal Party and Immediate Families</h3>
    <li><span class="time">5:45PM</span> Wedding walkthrough on the beach</li>
    <li><span class="time">6:30PM</span> Dinner at BokaDos Steakhouse Restaurant</li>
    <h3>Night out in Cabo San Lucas</h3>
    <li><span class="time">10:00PM</span> Transportation will be provided to leave Garza Blanca</li>
    <li>El Squid Roe & Mandala Los Cabos…</li>
    <li>We did not book transportation back to the resort. Uber or Taxi will be your best option</li>
    <h2>Thursday June 20th</h2>
    <h3>Pool Party on the Rooftop</h3>
    <li><span class="time">2:00-5:00PM</span></li>
    <h3>Meet and Greet Cocktails and Appetizers</h3>
    <li><span class="time">7:30-8:30PM</span> @ the Orange Tree</li>
    <h2>Friday June 21th</h2>
    <h3>Wedding Day</h3>
    <li><span class="time">4:30PM:</span> Transportation to leave the resort for immediate family and significant others</li>
    <li><span class="time">5:00PM:</span> Transportation to leave the resort for all other guests</li>
    <li><span class="time">6:00PM:</span> Ceremony</li>
    <li><span class="time">7:30PM:</span> Reception</li>
    <li><span class="time">1:00AM:</span> Last Song</li>
    <li>Shuttle will be leaving periodically throughout the night</li>
    <h2>Saturday June 22th</h2>
    <h3>Tropical Catamaran Day Cruise</h3>
    <li><span class="time">1:30PM:</span> Transportation will be provided to leave resort</li>
    <li><span class="time">2:00-6:00PM:</span> Catamaran Cruise</li>
    <li>Transportation will be provided to come back to resort</li>
    <li>Food/ alcohol/ snorkeling gears are included in price ($100 PP)</li>
    <li>More info to sign up/ pay through this link:
      <router-link to="/boat">Catamaran Fun</router-link>
    </li>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;

  h1 {
    margin-bottom: 40px;
    color: $accent-color-shade-1;
    text-shadow: $primary-color 2px 2px 0;
  }

  h2 {
    text-transform: uppercase;
    color: $primary-color;
  }

  h3 {
    color: $accent-color-shade-1;
  }

  .time {
    color: $accent-color-orange;
  }

  .block {
    background: $white;
    padding: 60px;
    width: 820px;
    margin: 0 auto;
    text-align: justify;
  }

  @media screen and (max-width: 959px) and (min-width: 768px) {
    .block {
      padding: 40px;
      width: 620px;
    }
  }


  @media screen and (max-width: 767px) {

    .block {
      padding: 30px;
      width: 100%;
      padding: 30px;
    }
  }

  @media screen and (max-width: 479px) {
    .block {
      padding: 30px 15px;
      width: 100%;
    }
  }

</style>
