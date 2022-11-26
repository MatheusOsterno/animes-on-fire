import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCixE80qi4iq0SSKzn0DmPyFKoBSASrTwY",
    authDomain: "animes-on-fire.firebaseapp.com",
    projectId: "animes-on-fire",
    storageBucket: "animes-on-fire.appspot.com",
    messagingSenderId: "319237249906",
    appId: "1:319237249906:web:7a902fe69bee1e3260dbeb",
    measurementId: "G-B373VRBHPS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.fieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();
