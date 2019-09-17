import Vue from 'vue';
import 'normalize.css';
import './styles/vendor/vendor.scss';
import './styles/global.scss';
import App from './App.vue';
import router from './router';
import './styles/misc/modificators.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
