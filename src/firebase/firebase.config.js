// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: "AIzaSyDh9GyhnM8XFa_NSW_yYgAirgj-6ya1FtA",
  authDomain: "dragon-news-f0f8a.firebaseapp.com",
  projectId: "dragon-news-f0f8a",
  storageBucket: "dragon-news-f0f8a.appspot.com",
  messagingSenderId: "261162863289",
  appId: "1:261162863289:web:07b516b22931701ea62968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;