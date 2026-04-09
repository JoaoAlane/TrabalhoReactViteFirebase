// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzrrqKOpgml7fYoJZSUnjemYU94WDlYkw",
  authDomain: "trabalho-react-vite-firebase.firebaseapp.com",
  projectId: "trabalho-react-vite-firebase",
  storageBucket: "trabalho-react-vite-firebase.firebasestorage.app",
  messagingSenderId: "704225584371",
  appId: "1:704225584371:web:0514e8757d57bbbbb24386",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
const auth = getAuth(app);

export { auth };
export default app;
