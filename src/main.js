import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueCarousel from 'vue-carousel';
import VueAnalytics from 'vue-analytics';
import { VueMasonryPlugin } from 'vue-masonry';
import Viewer from 'v-viewer';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.css';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-131760917-1',
  router
});
Vue.use(VueMaterial);
Vue.use(VueCarousel);
Vue.use(VueMasonryPlugin);
Vue.use(Viewer);

store.dispatch('LOAD_ALL_GUESTS');

new Vue(
  {
    router,
    store,
    render(h) {
      return h(App);
    },
  }
).$mount('#app');

