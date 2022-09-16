import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoFxdf7Xk5XVZq3XCG4YBWVvQ-ITnb3cQ",
  authDomain: "lesson-10-f10c4.firebaseapp.com",
  databaseURL: "https://lesson-10-f10c4-default-rtdb.firebaseio.com",
  projectId: "lesson-10-f10c4",
  storageBucket: "lesson-10-f10c4.appspot.com",
  messagingSenderId: "1081964985529",
  appId: "1:1081964985529:web:c82e7a90936af1a13a2f68",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = firebase.auth();
