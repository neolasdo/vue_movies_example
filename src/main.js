import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import VuePlyr from 'vue-plyr';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import './assets/css/custom.scss'




Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(VuePlyr);

const routers = new Router({routes});

new Vue({
  router: routers,
  render: h => h(App),
}).$mount('#app')
