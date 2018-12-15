import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'lets-party',
        component() {
          return import('./components/LetsParty.vue');
        },
      },
      {
        path: '/all-guests',
        name: 'all-guests',
        component() {
          return import('./views/AllGuests.vue');
        },
      },
      {
        path: '/rsvp',
        name: 'rsvp',
        component() {
          return import('./components/RSVP.vue');
        },
      },
      {
        path: '/proposal',
        name: 'proposal',
        component() {
          return import('./components/Proposal.vue');
        },
      },
    ],
  }
);
