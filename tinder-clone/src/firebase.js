import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDSNSUJ1AQslPPN8jqRZ7LZG2-m6odcJ0s",
    authDomain: "tinder-clone-e8c85.firebaseapp.com",
    databaseURL: "https://tinder-clone-e8c85.firebaseio.com",
    projectId: "tinder-clone-e8c85",
    storageBucket: "tinder-clone-e8c85.appspot.com",
    messagingSenderId: "937409111894",
    appId: "1:937409111894:web:f996d3fceb4d243041d8f7",
    measurementId: "G-TGS4YLF16X"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore()

  export default database;