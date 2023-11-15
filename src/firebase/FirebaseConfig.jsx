
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzz9i2D3Ai4l21Dxt-zZDg0pFZ30W0_eU",
  authDomain: "e-commerce-38e73.firebaseapp.com",
  projectId: "e-commerce-38e73",
  storageBucket: "e-commerce-38e73.appspot.com",
  messagingSenderId: "1094120707338",
  appId: "1:1094120707338:web:e3c80dd72e7b173ab616f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}