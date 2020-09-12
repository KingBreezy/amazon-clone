import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCmuVeCAlYNE4nCVYjblSpwiMy8WiF8xQ",
    authDomain: "clone-d0217.firebaseapp.com",
    databaseURL: "https://clone-d0217.firebaseio.com",
    projectId: "clone-d0217",
    storageBucket: "clone-d0217.appspot.com",
    messagingSenderId: "179800686361",
    appId: "1:179800686361:web:b79610561ad4b76198cf88",
    measurementId: "G-B3WLJTJ7P6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};