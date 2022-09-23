import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNQzE6pKicrXF17VtWWNbWYLB1-iBMF4Q",
    authDomain: "task-ba7fc.firebaseapp.com",
    projectId: "task-ba7fc",
    storageBucket: "task-ba7fc.appspot.com",
    messagingSenderId: "297248529978",
    appId: "1:297248529978:web:2b77ea18972becbc4fdf03"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database