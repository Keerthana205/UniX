import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "unix-ef51b.firebaseapp.com",
  projectId: "unix-ef51b",
  storageBucket: "unix-ef51b.firebasestorage.app",
  messagingSenderId: "1019754921400",
  appId: "1:1019754921400:web:e2052a5aac03eb3f87e34d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };