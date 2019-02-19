<template>
  <div>
    <md-table>
      <md-table-toolbar>
        <h1 class="md-title">ALL INCLUSIVE PLAN</h1>
        <span class="subHeader">Rates include taxes, fee and gratuities</span>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Suite Category</md-table-head>
        <md-table-head>Max Occupancy</md-table-head>
        <md-table-head>SINGLE</md-table-head>
        <md-table-head>DOUBLE</md-table-head>
        <md-table-head>TRIPLE</md-table-head>
        <md-table-head>QUAD</md-table-head>
        <md-table-head>FIFTH</md-table-head>
        <md-table-head>SIXTH</md-table-head>
        <md-table-head>SEVENTH</md-table-head>
        <md-table-head>EIGHTH</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>JUNIOR SUITE</md-table-cell>
        <md-table-cell>3</md-table-cell>
        <md-table-cell>$439</md-table-cell>
        <md-table-cell>$259</md-table-cell>
        <md-table-cell>$227</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>JUNIOR SUITE OCEAN VIEW</md-table-cell>
        <md-table-cell>3</md-table-cell>
        <md-table-cell>$492</md-table-cell>
        <md-table-cell>$286</md-table-cell>
        <md-table-cell>$245</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>1BDR SUITE</md-table-cell>
        <md-table-cell>4</md-table-cell>
        <md-table-cell>$553</md-table-cell>
        <md-table-cell>$316</md-table-cell>
        <md-table-cell>$266</md-table-cell>
        <md-table-cell>$240</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>2BDR SUITE</md-table-cell>
        <md-table-cell>6</md-table-cell>
        <md-table-cell>$952</md-table-cell>
        <md-table-cell>$516</md-table-cell>
        <md-table-cell>$371</md-table-cell>
        <md-table-cell>$298</md-table-cell>
        <md-table-cell>$271</md-table-cell>
        <md-table-cell>$253</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
        <md-table-cell>N/A</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>3BDR SUITE</md-table-cell>
        <md-table-cell>8</md-table-cell>
        <md-table-cell>$1280</md-table-cell>
        <md-table-cell>$687</md-table-cell>
        <md-table-cell>$489</md-table-cell>
        <md-table-cell>$390</md-table-cell>
        <md-table-cell>$331</md-table-cell>
        <md-table-cell>$292</md-table-cell>
        <md-table-cell>$264</md-table-cell>
        <md-table-cell>$255</md-table-cell>
      </md-table-row>
    </md-table>
    <md-card class="tableDescription md-accent">
      All inclusive plan rates are per person, per night, based on selected occupancy, quoted in US dollars.
      3 nights minimum stay required. Rates include taxes, fee and gratuities.
      <hr/>
      If you are a baller and want to get a group and book a 4 bedroom penthouse.
      Please let us know and we will get you the best rate possible.
      <br/>
      <h4>
        *To Reserve Room, Only First Night Deposit is Required*
      </h4>
      <md-button class="md-raised md-primary" id="bookBtn1" @click="newTabToLink(garzaWeddingURL)">Book Through Our Link
      </md-button>
    </md-card>
    <hr/>
    <md-table>
      <md-table-toolbar>
        <h1 class="md-title">EUROPEAN PLAN (Room Only)</h1>
        <span class="subHeader">Rates include taxes, fee and gratuities</span>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Suite Category</md-table-head>
        <md-table-head>JUNIOR SUITE</md-table-head>
        <md-table-head>JUNIOR SUITE</md-table-head>
        <md-table-head>JUNIOR SUITE OV</md-table-head>
        <md-table-head>JUNIOR SUITE OV</md-table-head>
        <md-table-head>ONE BEDROOM</md-table-head>
        <md-table-head>TWO BEDROOM</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Rate</md-table-cell>
        <md-table-cell>$358.87</md-table-cell>
        <md-table-cell>$443.00</md-table-cell>
        <md-table-cell>$412.48</md-table-cell>
        <md-table-cell>$496.62</md-table-cell>
        <md-table-cell>$473.52</md-table-cell>
        <md-table-cell>$873.78</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Occupancy</md-table-cell>
        <md-table-cell>2</md-table-cell>
        <md-table-cell>3</md-table-cell>
        <md-table-cell>2</md-table-cell>
        <md-table-cell>3</md-table-cell>
        <md-table-cell>2</md-table-cell>
        <md-table-cell>4</md-table-cell>
      </md-table-row>
    </md-table>
    <md-card class="tableDescription md-accent">
      European plan rates are per suite, per night, based on selected occupancy, quoted in US dollars.
      3 nights minimum stay required. Rates include taxes, fee and gratuities.
      <br/>
      <h4>
        *To Reserve Room, Only First Night Deposit is Required*
      </h4>
      <md-button class="md-raised md-primary" id="bookBtn2" @click="newTabToLink(garzaWeddingURL)">Book Through Our Link
      </md-button>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'Resort-Table',
    data: () => ({
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
  @import "./../css/main.scss";

  .md-title {
    overflow: visible;
  }

  .md-button {
    margin: 10px 0;
  }

  #bookBtn1 {
    color: $white;
    right: 0;
  }

  #bookBtn2 {
    color: $white;
    right: 0;
  }

  .subHeader {
    margin-left: 8px;
    font-weight: bold;
    color: $primary-color;
  }

  .tableDescription {
    padding: 5%;
  }

  hr {
    margin: 20px 0
  }
</style>
