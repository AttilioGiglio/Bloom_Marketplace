import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBq1KhjYMgGhrjQnw7hjMyeEiZcEKJD-vY",
    authDomain: "bloom-418c1.firebaseapp.com",
    databaseURL: "https://bloom-418c1.firebaseio.com",
    projectId: "bloom-418c1",
    storageBucket: "bloom-418c1.appspot.com",
    messagingSenderId: "1033981654683",
    appId: "1:1033981654683:web:6c727b155c68690c29783e",
    measurementId: "G-VH8GNG4R4W"
  });
  // Initialize Firebase
  var db = firebaseApp.firestore();
  export {db};