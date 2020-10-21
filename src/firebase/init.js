import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDuV-gegLKEdsYeWNNAyngzDCiUsQjUmJc",
    authDomain: "hackoween-taboo.firebaseapp.com",
    databaseURL: "https://hackoween-taboo.firebaseio.com",
    projectId: "hackoween-taboo",
    storageBucket: "hackoween-taboo.appspot.com",
    messagingSenderId: "123734599007",
    appId: "1:123734599007:web:a2751608be5cbcd46442ea",
    measurementId: "G-21KDY0WM35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()