import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAUmZtylTmztcyegO-zUQJwZZuTdnAZqM",
  authDomain: "chat-app-mahfuz.firebaseapp.com",
  databaseURL: "https://chat-app-mahfuz-default-rtdb.firebaseio.com",
  projectId: "chat-app-mahfuz",
  storageBucket: "chat-app-mahfuz.appspot.com",
  messagingSenderId: "321103549997",
  appId: "1:321103549997:web:d34659faa5be7b2c20caa4",
  measurementId: "G-439HX5ZSEB",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, timestamp };
