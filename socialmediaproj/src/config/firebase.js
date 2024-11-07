// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4R6ircPqARITYegAR0GJy46_Tzn4b2XU",
  authDomain: "socialmediareactapp-c6e69.firebaseapp.com",
  projectId: "socialmediareactapp-c6e69",
  storageBucket: "socialmediareactapp-c6e69.appspot.com",
  messagingSenderId: "970095923888",
  appId: "1:970095923888:web:f61d232f7aa76ed6192175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();