import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJGjVgCKhRRxxTg3BNmRpag_TgfqV-19A",
  authDomain: "mindpal-c8212.firebaseapp.com",
  projectId: "mindpal-c8212",
  storageBucket: "mindpal-c8212.appspot.com",
  messagingSenderId: "838803841305",
  appId: "1:838803841305:web:9131bdd1ed701e744c6588",
  measurementId: "G-FL46C1HZWC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider };
