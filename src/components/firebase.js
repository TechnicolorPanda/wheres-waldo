import firebase from 'firebase/app';
import 'firebase/firestore';

// initialize firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBXfK38V4NnjsFPKNE3pspUiXIY6mAC7IM",
    authDomain: "wheres-waldo-158de.firebaseapp.com",
    projectId: "wheres-waldo-158de",
    storageBucket: "wheres-waldo-158de.appspot.com",
    messagingSenderId: "953997612020",
    appId: "1:953997612020:web:2942162a86d29ef4305fa1",
    measurementId: "G-6SX66SH8T9"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  database.settings( {timestampsInSnapshots: true });

export default database;