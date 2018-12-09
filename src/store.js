import Vue from 'vue';
import Vuex from 'vuex';
import GuestsAPI from './services/api/Guests';

Vue.use(Vuex);

const guestTableCleanUP = ( data ) => {
  return data.map((guest) => {
    guest.id = parseInt(guest.id);
    guest.full_name = `${guest.first_name} ${guest.last_name}`;
    return guest;
  });
}

export default new Vuex.Store({
  state: {
    guests: [],
  },
  mutations: {
    UPDATE_GUEST_RSVP( state, status ) {

    },
    LOAD_ALL_GUESTS( state, guests ) {
      state.guests = guests;
    }
  },
  actions: {
    LOAD_ALL_GUESTS( context, payload ) {
      GuestsAPI.getAllGuests().then( (guests) => {
        context.commit('LOAD_ALL_GUESTS', guestTableCleanUP( guests ))
      });
    }
  },
  getters: {
    getAllGuests: state => state.guests,
  },
});
