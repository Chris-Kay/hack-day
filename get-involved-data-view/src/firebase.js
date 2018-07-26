// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtf0WZ_-VNxNjfV1WrcbWyLFUJJxlXN7g",
    authDomain: "hack-day-project-909e6.firebaseapp.com",
    databaseURL: "https://hack-day-project-909e6.firebaseio.com",
    projectId: "hack-day-project-909e6",
    storageBucket: "hack-day-project-909e6.appspot.com",
    messagingSenderId: "599405565042"
  };
firebase.initializeApp(config);
export default firebase;