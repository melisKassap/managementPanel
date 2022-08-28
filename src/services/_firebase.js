
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

//The data on this page is not shared for security reasons.
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);