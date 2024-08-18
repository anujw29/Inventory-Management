// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore' ;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTjbhZ5HPUoNXfDPNivzC-NKUDejwdF2s",
  authDomain: "inventory-anuj.firebaseapp.com",
  projectId: "inventory-anuj",
  storageBucket: "inventory-anuj.appspot.com",
  messagingSenderId: "769984420027",
  appId: "1:769984420027:web:7058a2b1b89e99f437319e",
  measurementId: "G-RH3VR3W7LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}

