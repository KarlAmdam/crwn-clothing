import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCb8MMZB9wxkYf7AjCfM2n7umWddqOgTyQ",
    authDomain: "crwn-db-e681e.firebaseapp.com",
    projectId: "crwn-db-e681e",
    storageBucket: "crwn-db-e681e.appspot.com",
    messagingSenderId: "397502796830",
    appId: "1:397502796830:web:77f2ca76eca17e4ea4ca0f",
    measurementId: "G-JKQGHQN4Y8"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;