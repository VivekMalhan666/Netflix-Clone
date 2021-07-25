import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD8qn7gMNS89jBZ0DAgJiAjkVqxl5Vc8IE',
  authDomain: 'netflix-clone-7ee87.firebaseapp.com',
  databaseURL: 'https://netflix-clone-7ee87-default-rtdb.firebaseio.com',
  projectId: 'netflix-clone-7ee87',
  storageBucket: 'netflix-clone-7ee87.appspot.com',
  messagingSenderId: '551752189971',
  appId: '1:551752189971:web:d1108577fad2b2f1cd57e6',
  measurementId: 'G-LBRRQBH1GT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
