// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFireStore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2rv0xIIrOsjhs6LU2E2gK4mVBoPCjaJM",
  authDomain: "coder-commerce-4afc8.firebaseapp.com",
  projectId: "coder-commerce-4afc8",
  storageBucket: "coder-commerce-4afc8.appspot.com",
  messagingSenderId: "372646959469",
  appId: "1:372646959469:web:fbf447c8a05cf7215de264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)