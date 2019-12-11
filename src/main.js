import Vue from 'vue';
import 'normalize.css';
import twemoji from 'twemoji';
import './styles/vendor/vendor.scss';
import './styles/global.scss';
import App from './App.vue';
import router from './router';
import './styles/misc/modificators.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.directive('emoji', {
  inserted(el) {
    el.innerHTML = twemoji.parse(el.innerHTML, {
      folder: 'svg',
      ext: '.svg',
    });
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
