import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCHLKXvNQuYybxKeTo9wP6PlqwY_Y1Shuc",
  authDomain: "e-library-c3278.firebaseapp.com",
  projectId: "e-library-c3278",
  storageBucket: "e-library-c3278.appspot.com",
  messagingSenderId: "829419381487",
  appId: "1:829419381487:web:af98e50d226c2588c0b11a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
