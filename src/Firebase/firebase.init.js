// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGa9aOaxvXsQ9w94ud_sG4VzeUjXC4PSA",
  authDomain: "auth-firebase-context-ta-86b59.firebaseapp.com",
  projectId: "auth-firebase-context-ta-86b59",
  storageBucket: "auth-firebase-context-ta-86b59.appspot.com",
  messagingSenderId: "969819601878",
  appId: "1:969819601878:web:a79ac3c54889fc9ae7c277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app