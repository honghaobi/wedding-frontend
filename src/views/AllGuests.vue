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
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Street">{{ item.address_street }}</md-table-cell>
        <md-table-cell md-label="City">{{ item.address_city }}</md-table-cell>
        <md-table-cell md-label="State">{{ item.address_state }}</md-table-cell>
        <md-table-cell md-label="Zip">{{ item.address_zip }}</md-table-cell>
        <md-table-cell md-label="Country">{{ item.address_country }}</md-table-cell>
        <md-table-cell md-label="Resort">{{ item.resort_name }}</md-table-cell>
        <md-table-cell md-label="Option">{{ item.resort_option }}</md-table-cell>
        <md-table-cell md-label="R-Booked">{{ item.resort_booked }}</md-table-cell>
        <md-table-cell md-label="R-Arrival">{{ item.resort_arrival_date }}</md-table-cell>
        <md-table-cell md-label="R-Depart">{{ item.resort_departure_date }}</md-table-cell>
        <md-table-cell md-label="F-Booked">{{ item.flight_booked }}</md-table-cell>
        <md-table-cell md-label="Flight # Arrival">{{ item.flight_number_arrival }}</md-table-cell>
        <md-table-cell md-label="Flight # Departure">{{ item.flight_number_departure }}</md-table-cell>
        <md-table-cell md-label="F-Arrival">{{ item.flight_arrival_date_time }}</md-table-cell>
        <md-table-cell md-label="F-Depart">{{ item.flight_departure_date_time }}</md-table-cell>
        <md-table-cell md-label="Allergies">{{ item.food_allergies }}</md-table-cell>
        <md-table-cell md-label="Events">{{ item.events }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import guestsAPI from '../services/api/Guests';

  const toLower = text => text.toString()
    .toLowerCase();

  const searchByName = (items, term) => items.filter(item => toLower(item.full_name).includes(toLower(term))) || items;

  export default {
    name: 'allGuests',
    data: () => ({
      search: '',
      searched: [],
      guests: [],
    }),
    methods: {
      searchOnTable() {
        this.searched = searchByName(this.guests, this.search);
      },
    },
    mounted() {
      guestsAPI.getAllGuests()
        .then((guests) => {
          this.guests = guests.map((guest) => {
            guest.full_name = `${guest.first_name} ${guest.last_name}`;
            return guest;
          });
        });
    },
  };
</script>
