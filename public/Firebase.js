// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm60ZfI2dZIbKzWKZ0MXn0ynhGevcHxiI",
  authDomain: "video---call---app.firebaseapp.com",
  databaseURL: "https://video---call---app-default-rtdb.firebaseio.com",
  projectId: "video---call---app",
  storageBucket: "video---call---app.firebasestorage.com",
  messagingSenderId: "780733149373",
  appId: "1:780733149373:web:f802f429a8580fe4cc87d4",
  measurementId: "G-0P7G7JR4B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
