// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-8N6WXMJa_h4lao-_XO2m_uQMn1CwF8",
  authDomain: "drecreo-b4af8.firebaseapp.com",
  projectId: "drecreo-b4af8",
  storageBucket: "drecreo-b4af8.appspot.com",
  messagingSenderId: "565662963066",
  appId: "1:565662963066:web:cbca06071240bd2f8572c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
