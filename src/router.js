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
        name: 'home',
        component() {
          return import('./components/HK.vue');
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
        path: '/resort',
        name: 'resort',
        component() {
          return import('./components/Resort.vue');
        },
      },
      {
        path: '/travel',
        name: 'travel',
        component() {
          return import('./components/Travel.vue');
        },
      },
      // {
      //   path: '/gallery',
      //   name: 'gallery',
      //   component() {
      //     return import('./components/Gallery.vue');
      //   },
      // },
      {
        path: '/party',
        name: 'party',
        component() {
          return import('./components/LetsParty.vue');
        },
      },
      {
        path: '/proposal',
        name: 'proposal',
        component() {
          return import('./components/Proposal.vue');
        },
      },
      // {
      //   path: '/registry',
      //   name: 'proposal',
      //   component() {
      //     return import('./components/Registry.vue');
      //   },
      // },
      {
        path: '/faq',
        name: 'faq',
        component() {
          return import('./components/FAQ.vue');
        },
      },
    ],
  }
);
