// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkuYcpJTeKg5tZWjWOHlh0NG24hr_JNqA",
    authDomain: "dragon-news-6e3a7.firebaseapp.com",
    projectId: "dragon-news-6e3a7",
    storageBucket: "dragon-news-6e3a7.appspot.com",
    messagingSenderId: "1088086059867",
    appId: "1:1088086059867:web:8a845dbfd15593772ac87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;