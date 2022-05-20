import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Editor from "vue2-editor";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vue2Editor);

Vue.config.productionTip = false

//per carregar la pàgina quan la app tingui accés a la base de dades per veure si està registrat
let app;
firebase.auth().onAuthStateChanged(()=> {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app'); 
  }
})

