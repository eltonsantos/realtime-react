// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgiRiZubvUi7LbvrlieguX3VlUV9-IUTY",
  authDomain: "realtime-react-9eb06.firebaseapp.com",
  databaseURL: "https://realtime-react-9eb06-default-rtdb.firebaseio.com",
  projectId: "realtime-react-9eb06",
  storageBucket: "realtime-react-9eb06.appspot.com",
  messagingSenderId: "765581630224",
  appId: "1:765581630224:web:878fbfc9d6840d0c832395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);