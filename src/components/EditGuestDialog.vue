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
      <md-field>
        <label>Relationship ID</label>
        <md-input v-model=guest.relation></md-input>
      </md-field>
      <div class="md-checkbox-container">
        <md-switch v-model=guest.attending>Attending</md-switch>
        <md-checkbox v-model=guest.resort_booked>Resort Booked</md-checkbox>
        <md-checkbox v-model=guest.flight_booked>Flight Booked</md-checkbox>
        <md-checkbox v-model=guest.opt_message>Opt-in Message</md-checkbox>
        <md-checkbox v-model=guest.opt_email>Opt-in Email</md-checkbox>
      </div>
      <md-datepicker v-model="guest.resort_arrival_date">
        <label>Arrival Date</label>
      </md-datepicker>
      <md-datepicker v-model="guest.resort_departure_date">
        <label>Departure Date</label>
      </md-datepicker>
      <md-field>
        <label>Allergies</label>
        <md-input v-model=guest.food_allergies></md-input>
      </md-field>
      <h3>Events</h3>
      <div class="md-checkbox-container">
        <md-checkbox v-model="guest.events" value="boatCruise">Boat Cruise</md-checkbox>
        <md-checkbox v-model="guest.events" value="nightClubs">Night Clubs</md-checkbox>
        <md-checkbox v-model="guest.events" value="fishing">Fishing</md-checkbox>
        <md-checkbox v-model="guest.events" value="golfing">Golfing</md-checkbox>
        <md-checkbox v-model="guest.events" value="waterSport">Water Sports</md-checkbox>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="handleClose">Close</md-button>
        <md-button class="md-accent" @click="handleSave">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button class="md-primary" @click="showDialog = true">Edit</md-button>
  </div>
</template>

<script>
  import store from './../store';

  export default {
    name: 'EditGuestDialog',
    props: {
      guest: {},
    },
    data: () => ({
      showDialog: false,
    }),
    methods: {
      handleClose() {
        //TODO: revert back to initial guest data;
        this.showDialog = false;
      },
      handleSave() {
        store.dispatch('UPDATE_GUEST_BY_ID', {
          id: this.guest.id,
          relation: this.guest.relation,
          phone: this.guest.phone,
          email: this.guest.email,
          attending: this.guest.attending,
          resort_booked: this.guest.resort_booked,
          flight_booked: this.guest.flight_booked,
          opt_message: this.guest.opt_message,
          opt_email: this.guest.opt_email,
          resort_arrival_date: this.guest.resort_arrival_date,
          resort_departure_date: this.guest.resort_departure_date,
          food_allergies: this.guest.food_allergies,
          events: JSON.stringify(this.guest.events),
        });
        this.showDialog = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .md-dialog {
    padding: 15px;
    min-width: 450px;
    max-width: 700px;
    overflow-y: scroll;
  }
</style>
