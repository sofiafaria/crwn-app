import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyA5U2NlPPkcFlp9lFGoVKVdg3Zg-unds2o",
    authDomain: "crwn-db-c43c6.firebaseapp.com",
    projectId: "crwn-db-c43c6",
    storageBucket: "crwn-db-c43c6.appspot.com",
    messagingSenderId: "289715830105",
    appId: "1:289715830105:web:9de511435c92b6f8306048",
    measurementId: "G-Z1830P96LG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
