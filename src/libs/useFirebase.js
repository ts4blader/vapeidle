import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdMsJq6zPC98eXLvC60It_UES39zDxkdw",
  authDomain: "vapeidle-1a8c9.firebaseapp.com",
  projectId: "vapeidle-1a8c9",
  storageBucket: "vapeidle-1a8c9.appspot.com",
  messagingSenderId: "990783165119",
  appId: "1:990783165119:web:d932c4afb900ad0bc7ac0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
