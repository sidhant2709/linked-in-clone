import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDR5OI7d58afzOgE9lMiNyoZ_-GSsoQZ2Y",
  authDomain: "linkedin-clone-33088.firebaseapp.com",
  projectId: "linkedin-clone-33088",
  storageBucket: "linkedin-clone-33088.appspot.com",
  messagingSenderId: "995510819846",
  appId: "1:995510819846:web:c6217012e8c3cfaa6eb787",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
