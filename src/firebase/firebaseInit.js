import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALUpN3wI0-kf0PaXpljcGcFJW1cQ9aZC4",
    authDomain: "webblogsaaa.firebaseapp.com",
    projectId: "webblogsaaa",
    storageBucket: "webblogsaaa.appspot.com",
    messagingSenderId: "972831274521",
    appId: "1:972831274521:web:e3616da6055801bf005c88"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore(); 
