// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQNzu4Uxu8qSjAGfy3fV8DiwhuxUlJ34U",
  authDomain: "auke-1a6a1.firebaseapp.com",
  databaseURL: "https://auke-1a6a1-default-rtdb.firebaseio.com",
  projectId: "auke-1a6a1",
  storageBucket: "auke-1a6a1.appspot.com",
  messagingSenderId: "83214755766",
  appId: "1:83214755766:web:17810c74c13a6652d20317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth } 