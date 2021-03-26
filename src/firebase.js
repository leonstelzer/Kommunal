import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBKwJLFrpZfMsfpjVwH_R2OX0cPfjnpWAA",
  authDomain: "kommunalcampus.firebaseapp.com",
  projectId: "kommunalcampus",
  storageBucket: "kommunalcampus.appspot.com",
  messagingSenderId: "934540811647",
  appId: "1:934540811647:web:94b68730e2c698974b4e4a",
  measurementId: "G-YP5HH85P4V"

})


var db = firebase.firestore();

export const auth = app.auth()
export default app
