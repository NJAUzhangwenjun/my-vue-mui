// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'
import '../static/mui/js/mui'
import '../static/mui/fonts/mui.ttf'
import '../static/mui/fonts/mui-icons-extra.ttf'
import vueResources from 'vue-resource'

Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(vueResources);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
