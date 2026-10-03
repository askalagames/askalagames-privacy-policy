// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCo2R_YXrOUJJqsOrKGY6LO-t2b7aI_8Y",
  authDomain: "askala-games.firebaseapp.com",
  projectId: "askala-games",
  storageBucket: "askala-games.firebasestorage.app",
  messagingSenderId: "847461863195",
  appId: "1:847461863195:web:7110ad79977f28c5dacdbe",
  measurementId: "G-EQ20XRFDRJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;