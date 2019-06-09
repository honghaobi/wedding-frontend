<template>
  <div id="#allGuests">
    <md-table v-model="searched" md-sort="last_name" md-sort-order="asc" md-fixed-header>
      <md-table-toolbar>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state md-label="No Guests found"
                            :md-description="`No guests found for this '${search}' query. Try a different search term or create a new user.`">
      </md-table-empty-state>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="First Name" md-sort-by="first_name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="last_name">{{ item.last_name }}</md-table-cell>
        <md-table-cell md-label="Attending">{{ item.attending }}</md-table-cell>
        <md-table-cell md-label="R-Booked">{{ item.resort_booked }}</md-table-cell>
        <md-table-cell md-label="F-Booked">{{ item.flight_booked }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Opt-In-Message">{{ item.opt_message }}</md-table-cell>
        <md-table-cell md-label="Opt-In-Email">{{ item.opt_email }}</md-table-cell>
        <md-table-cell md-label="More">
          <EditGuestDialog guest={item} :guest="item"/>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-content class="md-accent countContainer">
      <h3> RSVP COUNT: {{guestsRSVPCount}}</h3>
      <h3> RSVP-NO COUNT: {{guestsRSVPNOCount}}</h3>
      <h3> BOOKED FLIGHTS COUNT: {{guestsFlightBookedCount}}</h3>
      <h3> BOOKED RESORT COUNT: {{guestsResortBookedCount}}</h3>
    </md-content>
  </div>
</template>

<script>
  import EditGuestDialog from '../components/EditGuestDialog';
  import store from '../store';

  const toLower = text => text.toString()
    .toLowerCase();

  const searchByName = (items, term) => items.filter(item => toLower(item.full_name)
    .includes(toLower(term))) || items;

  export default {
    name: 'AllGuests',
    components: { EditGuestDialog },
    data: () => ({
      search: null,
      searched: [],
    }),
    computed: {
      guests: () => {
        return store.getters.getAllGuests;
      },
      guestsRSVPCount: () => {
        return store.getters.getRSVPCounts;
      },
      guestsRSVPNOCount: () => {
        return store.getters.getRSVPNOCounts;
      },
      guestsResortBookedCount: () => {
        return store.getters.getResortBookedCounts;
      },
      guestsFlightBookedCount: () => {
        return store.getters.getFlightBookedCounts;
      }
    },
    methods: {
      searchOnTable() {
        this.searched = searchByName(this.guests, this.search);
      },
    },
    mounted() {
      this.search = '';
    },
  };
</script>

<style lang="scss" scoped>
  .countContainer {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
