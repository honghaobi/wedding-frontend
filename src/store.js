import Vue from 'vue';
import Vuex from 'vuex';
import GuestsAPI from './services/api/Guests';

Vue.use(Vuex);

function guestTableCleanUp( data ) {
  return data.map((guest) => {
    guest.id = parseInt(guest.id);
    guest.full_name = `${guest.first_name} ${guest.last_name}`;
    return guest;
  });
}

function guestUpdateCleanUp( data ) {
  let cleanUpdata = data
  delete data.full_name;
  cleanUpdata['id'] = cleanUpdata['id'].toString();
  return cleanUpdata;
}

export default new Vuex.Store({
  state: {
    guests: [],
  },
  mutations: {
    LOAD_ALL_GUESTS( state, guests ) {
      state.guests = guests;
    },
  },
  actions: {
    LOAD_ALL_GUESTS( context, payload ) {
      GuestsAPI.getAllGuests().then( (guests) => {
        context.commit('LOAD_ALL_GUESTS', guestTableCleanUp( guests ))
      });
    },
    UPDATE_GUEST_BY_ID( context, payload ) {
      const updatedGuest = guestUpdateCleanUp(payload);
      GuestsAPI.updateGuestById( updatedGuest.id, updatedGuest ).then( (guests) => {
        context.commit('LOAD_ALL_GUESTS', guestTableCleanUp( guests ))
      });
    }
  },
  getters: {
    getAllGuests: state => state.guests,
    getGuestById: (state) => (id) => {
      return state.guests.find(guest => guest.id == id);
    }
  },
});
