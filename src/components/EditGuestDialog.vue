<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>{{guest.full_name}}</md-dialog-title>
      <md-field>
        <label>Phone</label>
        <md-input v-model=guest.phone></md-input>
      </md-field>
      <md-field>
        <label>Email</label>
        <md-input v-model=guest.email></md-input>
      </md-field>
      <md-checkbox v-model=guest.attending value="true">Attending</md-checkbox>
      <md-checkbox v-model=guest.resort_booked value="true">Resort Booked</md-checkbox>
      <md-checkbox v-model=guest.flight_booked value="true">Flight Booked</md-checkbox>
      <md-datepicker v-model="guest.resort_arrival_date">
        <label>Arrival Date</label>
      </md-datepicker>
      <md-datepicker v-model="guest.resort_departure_date">
        <label>Departure Date</label>
      </md-datepicker>
      <md-field>
        <label>Allergies</label>
        <md-input v-model=guest.allergies></md-input>
      </md-field>
      <md-field>
        <label>Events</label>
        <md-input v-model=guest.events></md-input>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button class="md-primary" @click="showDialog = true">Edit</md-button>
  </div>
</template>

<script>
  export default {
    name: 'EditGuestDialog',
    props: {
      guest: {},
    },
    data: () => ({
      showDialog: false
    })
  };
</script>

<style lang="scss" scoped>
  .md-dialog {
    padding: 15px;
    width: 430px;
    overflow-y: scroll;
  }
</style>
