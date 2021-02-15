import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vuelidate from 'vuelidate';
import Toast from 'vue-toastification';
import SlimDialog from 'v-slim-dialog';
import VueSweetalert2 from 'vue-sweetalert2';
import VueLazyLoad from 'vue-lazyload';
import VueCarousel from 'vue-carousel';
import VueSplide from '@splidejs/vue-splide';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-toastification/dist/index.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import 'v-slim-dialog/dist/v-slim-dialog.css';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSplide);

Vue.use(VueCarousel);

require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

Vue.use(VueLazyLoad);
Vue.use(VueSweetalert2);
Vue.use(SlimDialog);

Vue.use(Toast);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
AOS.init();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
