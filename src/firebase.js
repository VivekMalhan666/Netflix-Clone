import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx19tQNypx0RIlGW2KqxV-8MgAHbZExBQ",
  authDomain: "netflix-clone-afcdd.firebaseapp.com",
  databaseURL: "https://netflix-clone-afcdd.firebaseio.com",
  projectId: "netflix-clone-afcdd",
  storageBucket: "netflix-clone-afcdd.appspot.com",
  messagingSenderId: "572015008217",
  appId: "1:572015008217:web:20ef8c919cc1c84b0561c8",
  measurementId: "G-W3LF8EXS9L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
