// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyA-_DL71zcH_g5tz-L8Lvj1y0xecj8TSwA",
  authDomain: "whatsapp-c35bb.firebaseapp.com",
  projectId: "whatsapp-c35bb",
  storageBucket: "whatsapp-c35bb.appspot.com",
  messagingSenderId: "729902983976",
  appId: "1:729902983976:web:e4035e2958846783957e1d",
  measurementId: "G-YX0GE0FVJ6"
};


// process.env.FIREBASE;



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;