import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCixE80qi4iq0SSKzn0DmPyFKoBSASrTwY",
  authDomain: "animes-on-fire.firebaseapp.com",
  projectId: "animes-on-fire",
  storageBucket: "animes-on-fire.appspot.com",
  messagingSenderId: "319237249906",
  appId: "1:319237249906:web:7a902fe69bee1e3260dbeb",
  measurementId: "G-B373VRBHPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);