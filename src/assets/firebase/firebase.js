// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4XZEt-V0Mg_0XQHdTG2un0b_vfrND-c",
  authDomain: "assignment-nine-d3a27.firebaseapp.com",
  projectId: "assignment-nine-d3a27",
  storageBucket: "assignment-nine-d3a27.firebasestorage.app",
  messagingSenderId: "132715214051",
  appId: "1:132715214051:web:8547701aa490ca246ec1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth