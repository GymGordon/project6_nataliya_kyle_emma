import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9_vedIYf4hHQS0XRkmfPY3OdmBHjMCzk",
    authDomain: "gym-gordon.firebaseapp.com",
    databaseURL: "https://gym-gordon.firebaseio.com",
    projectId: "gym-gordon",
    storageBucket: "gym-gordon.appspot.com",
    messagingSenderId: "310193305565"
};
firebase.initializeApp(config);

export default firebase