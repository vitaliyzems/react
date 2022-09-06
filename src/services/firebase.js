import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCluADsG9VkkhFGAmEMbEOwuz5WtsaVzL0",
  authDomain: "react-lesson-9-e3db8.firebaseapp.com",
  projectId: "react-lesson-9-e3db8",
  storageBucket: "react-lesson-9-e3db8.appspot.com",
  messagingSenderId: "403268152766",
  appId: "1:403268152766:web:6ad4e516a8fd9150719def",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
