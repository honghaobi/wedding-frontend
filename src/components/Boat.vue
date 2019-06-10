<template>
  <div class="block">
    <h1>Catamaran Saturday June 22nd 2:00 - 6:00PM</h1>
    <img src="./../assets/photos/other/catamaran.jpg"/>
    <p>
      We have booked a catamaran cruise for Saturday June 22nd! It consists of boating around the famous Cabo San Lucas Arch, Lovers Beach, and other
      landmarks. It’s $100 per person and includes the cruise, food and beverage and transportation to and from our resort. The catamaran will also
      anchor so we can swim, snorkel, stand up paddle board.
    </p>
    <p><b>
      You can venmo Henry <span class="pay">@henrybi</span> or PayPal to
      <span class="pay">henrybidesign@gmail.com</span> Please try to pay before June 17th to reserve your spot.
    </b>
    </p>
    <md-table v-model="guests" md-sort="last_name" md-sort-order="asc" md-fixed-header>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="First Name" md-sort-by="first_name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="last_name">{{ item.last_name }}</md-table-cell>
        <md-table-cell md-label="Interested">
          <div class="md-checkbox-container">
            <md-checkbox v-model="item.events" value="boatCruise"></md-checkbox>
          </div>
        </md-table-cell>
        <md-table-cell md-label="Paid"> {{ item.paid ? 'YES ' : 'NOT YET' }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

  import store from '../store';

  export default {
    name: 'boatCruise',
    computed: {
      guests: () => {
        return store.getters.getGuestsAttending;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;

  .header {
    color: $accent-color-orange;
  }

  .md-table {
    height: 400px;
  }

  .pay {
    color: $primary-color;
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
    .md-table {
      width: 350px;
    }
    .block {
      padding: 30px 15px;
      width: 100%;
    }
  }

</style>
