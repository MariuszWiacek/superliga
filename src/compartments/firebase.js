// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKjpxvNMm3Cb-cA8cPskPY6ROPsg8XO4Q",
  authDomain: "bets-3887b.firebaseapp.com",
  databaseURL: "https://bets-3887b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bets-3887b",
  storageBucket: "bets-3887b.appspot.com",
  messagingSenderId: "446338011209",
  appId: "1:446338011209:web:bc4a33a19b763564992f98",
  measurementId: "G-W9EB371N7C"
};
const firebaseConfig2 = {
  apiKey: "AIzaSyCKjpxvNMm3Cb-cA8cPskPY6ROPsg8XO4Q",
  authDomain: "bets-3887b.firebaseapp.com",
  databaseURL: "https://bets-3887b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bets-3887b",
  storageBucket: "bets-3887b.appspot.com",
  messagingSenderId: "446338011209",
  appId: "1:446338011209:web:bc4a33a19b763564992f98",
  measurementId: "G-W9EB371N7C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);