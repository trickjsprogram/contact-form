import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyCTJkwZ4uthi4u5rxLva93GuzGq5e82wQE",
    authDomain: "contact-form-7d6e9.firebaseapp.com",
    projectId: "contact-form-7d6e9",
    storageBucket: "contact-form-7d6e9.appspot.com",
    messagingSenderId: "632602832596",
    appId: "1:632602832596:web:fb575beef92f6c0e2f9541"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
