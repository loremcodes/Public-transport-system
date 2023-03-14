// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGS-zPLyw5tU2Qm0xkHVGMY293gE_v5HI",
  authDomain: "test2-f5263.firebaseapp.com",
  projectId: "test2-f5263",
  storageBucket: "test2-f5263.appspot.com",
  messagingSenderId: "299846381149",
  appId: "1:299846381149:web:971f79aeffe712213467b4",
  measurementId: "G-TLY1MF6NZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let app
if (firebase.apps.lenght === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app=fireba
}