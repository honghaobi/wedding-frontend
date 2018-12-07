<template>
  <div id="#allGuests">
    <h1>This is all of the guests</h1>
    <article v-for="guest in guests" :key="guest.id">
      <div>
        <b>{{guest.first_name}} </b>
        <b>{{guest.last_name}}</b>
      </div>
    </article>
  </div>
</template>


<script>

import guestsAPI from '../services/api/Guests';

export default {
  name: 'allGuests',
  data() {
    return {
      guests: [],
    };
  },
  mounted() {
    guestsAPI.getAllGuests()
      .then((guests) => {
        this.guests = guests;
      });
  },
};
</script>
