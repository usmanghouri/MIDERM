import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx-2yEMx42bHqubw17YEQE-XXyj75zrm0",
  authDomain: "loginsignup-31448.firebaseapp.com",
  projectId: "loginsignup-31448",
  storageBucket: "loginsignup-31448.appspot.com",
  messagingSenderId: "41002890860",
  appId: "1:41002890860:web:f110c5d8472f1394324a49",
  measurementId: "G-JJL0JXYGGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };