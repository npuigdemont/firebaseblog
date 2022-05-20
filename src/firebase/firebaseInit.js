import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4X1RV8J0R2zqCcrsQI6pGhANrBHD4rkM",
    authDomain: "fireblogsnsp.firebaseapp.com",
    projectId: "fireblogsnsp",
    storageBucket: "fireblogsnsp.appspot.com",
    messagingSenderId: "912109841488",
    appId: "1:912109841488:web:862c37ccd2687898d6b555"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {timestamp};
export default firebaseApp.firestore();