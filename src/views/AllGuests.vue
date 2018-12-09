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
        <md-table-cell md-label="More">
          <EditGuestDialog guest={item} :guest="item"/>
        </md-table-cell>
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="First Name" md-sort-by="first_name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="last_name">{{ item.last_name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Attending">{{ item.attending }}</md-table-cell>
        <md-table-cell md-label="R-Booked">{{ item.resort_booked }}</md-table-cell>
        <md-table-cell md-label="F-Booked">{{ item.flight_booked }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import GuestsAPI from '../services/api/Guests';
  import EditGuestDialog from '../components/EditGuestDialog';

  const toLower = text => text.toString()
    .toLowerCase();

  const searchByName = (items, term) => items.filter(item => toLower(item.full_name)
    .includes(toLower(term))) || items;

  export default {
    name: 'allGuests',
    components: { EditGuestDialog },
    data: () => ({
      search: '',
      searched: [],
      guests: [],
    }),
    component: {
      EditGuestDialog,
    },
    methods: {
      searchOnTable() {
        this.searched = searchByName(this.guests, this.search);
      },
    },
    mounted() {
      GuestsAPI.getAllGuests()
        .then((guests) => {
          this.guests = guests.map((guest) => {
            guest.id = parseInt(guest.id);
            guest.full_name = `${guest.first_name} ${guest.last_name}`;
            return guest;
          });
        });
    },
  };
</script>

<style lang="scss" scoped>
</style>
