import firebase from 'firebase'

require("@firebase/firestore")


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBdp8NPGgKokb6_lN9fiI5JDwXKgsZUqLA",
  authDomain: "storyhub-48ee4.firebaseapp.com",
  databaseURL: "https://storyhub-48ee4-default-rtdb.firebaseio.com",
  projectId: "storyhub-48ee4",
  storageBucket: "storyhub-48ee4.appspot.com",
  messagingSenderId: "180319472497",
  appId: "1:180319472497:web:d8a008df0474834d2b84d0"
};

firebase.initializeApp(firebaseConfig); 
export default firebase.firestore()