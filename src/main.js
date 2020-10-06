import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faListUl, faEdit, faChevronRight, faAngleDown ,faMinus, faPlus,faGlassMartiniAlt, faEye , faEyeSlash, faShoppingBag, faBars, faHome, faUtensils, faUserCircle, faInfoCircle, faTasks, faMugHot, faArrowAltCircleRight, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store'

library.add(
              faListUl,
              faSearch,
              faEdit,
              faEye,
              faEyeSlash,
              faBars,
              faShoppingBag,
              faHome, 
              faUtensils, 
              faUserCircle, 
              faAngleDown,
              faInfoCircle,
              faTasks,
              faMugHot,
              faGlassMartiniAlt,
              faMinus,
              faPlus,
              faArrowAltCircleRight,
              faTwitter,
              faFacebook,
              faInstagram,
              faChevronRight,
              faSignOutAlt
            );
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
