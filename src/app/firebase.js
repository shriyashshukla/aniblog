// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrOuA4iw0omyKipZ5qxr5u3mC1hGSSxsU",
  authDomain: "aniblogs-515fa.firebaseapp.com",
  projectId: "aniblogs-515fa",
  storageBucket: "aniblogs-515fa.appspot.com",
  messagingSenderId: "291520023820",
  appId: "1:291520023820:web:d525b88bab2820a50b0d29",
  measurementId: "G-14WJBNH63J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);