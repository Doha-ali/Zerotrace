// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,  signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6nwQNonYHY33kswrwcQmsmgHXdZNoZU",
  authDomain: "zero-trace-21aab.firebaseapp.com",
  projectId: "zero-trace-21aab",
  storageBucket: "zero-trace-21aab.firebasestorage.app",
  messagingSenderId: "667314907800",
  appId: "1:667314907800:web:d4ac9d2455d3591da2beed",
  measurementId: "G-1SY9K501E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// مزود Google
const googleProvider = new GoogleAuthProvider();
// مزود Facebook
// const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, signInWithPopup };