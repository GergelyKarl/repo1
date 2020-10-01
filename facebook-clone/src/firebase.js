import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvAPosC3Q3RrfEmC9WXKAop_Loo7UfIbU",
  authDomain: "facebook-clone-e5361.firebaseapp.com",
  databaseURL: "https://facebook-clone-e5361.firebaseio.com",
  projectId: "facebook-clone-e5361",
  storageBucket: "facebook-clone-e5361.appspot.com",
  messagingSenderId: "724166009204",
  appId: "1:724166009204:web:e27108b518033a89284c21",
  measurementId: "G-QECW7E107K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebase };
export default db;
