import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: router(),
  vuetify: new Vuetify()
}).$mount('#app');
