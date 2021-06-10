

import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAFF4yep1qUuZrG8qIpwtHjFVcNOfT3HjU",
  authDomain: "myapp-firegram.firebaseapp.com",
  projectId: "myapp-firegram",
  storageBucket: "myapp-firegram.appspot.com",
  messagingSenderId: "508168980354",
  appId: "1:508168980354:web:f8d5266a1193051b41b19b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

