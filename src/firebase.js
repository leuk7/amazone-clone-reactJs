// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtmepjxJPyJhcIP6MNvI6ZJmOSIvIdZmE",
  authDomain: "e-clone-interview.firebaseapp.com",
  projectId: "e-clone-interview",
  storageBucket: "e-clone-interview.appspot.com",
  messagingSenderId: "1059152972121",
  appId: "1:1059152972121:web:b0397ec32dabb07ec2a448",
  measurementId: "G-J3ZRZ4ZRY1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
