import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "untoldphrase-d15a9.firebaseapp.com",
  projectId: "untoldphrase-d15a9",
  storageBucket: "untoldphrase-d15a9.appspot.com",
  messagingSenderId: "909103142706",
  appId: "1:909103142706:web:a074dcd00ac2c7d806692b",
  measurementId: "G-V4FPF9FLB7"
};

const app = initializeApp(firebaseConfig);

export {app}