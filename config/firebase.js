import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP8Hjj2E7AgGOmPJei0-QNCKAd6wQ0CnE",
  authDomain: "testing-auth-1263c.firebaseapp.com",
  projectId: "testing-auth-1263c",
  storageBucket: "testing-auth-1263c.appspot.com",
  messagingSenderId: "555036878959",
  appId: "1:555036878959:web:c17e0213dd0545bcdb859a",
  measurementId: "G-B31P2L9WH2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();