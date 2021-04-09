import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSjtN1AX1hOteiEtnZyR2jNGj3wF7rkcg",
    authDomain: "netflix-clone-5b783.firebaseapp.com",
    projectId: "netflix-clone-5b783",
    storageBucket: "netflix-clone-5b783.appspot.com",
    messagingSenderId: "116121588964",
    appId: "1:116121588964:web:e6aef490414d1ef4e088f1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
