import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.css';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

store.dispatch('LOAD_ALL_GUESTS');

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');

