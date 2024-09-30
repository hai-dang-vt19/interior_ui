import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './router/router';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
