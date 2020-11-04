import firebase from 'firebase/app';
import 'firebase/firestore';   // cloud firestore
import 'firebase/auth'
// web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBq1KhjYMgGhrjQnw7hjMyeEiZcEKJD-vY",
    authDomain: "bloom-418c1.firebaseapp.com",
    databaseURL: "https://bloom-418c1.firebaseio.com",
    projectId: "bloom-418c1",
    storageBucket: "bloom-418c1.appspot.com",
    messagingSenderId: "1033981654683",
    appId: "1:1033981654683:web:6c727b155c68690c29783e",
    measurementId: "G-VH8GNG4R4W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {db,auth,provider};