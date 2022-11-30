// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyABuyMFMtWy5hgug0Jdbt_Mi3KSgPFo00I",
  authDomain: "todo-redux-saga-b7260.firebaseapp.com",
  databaseURL: "https://todo-redux-saga-b7260-default-rtdb.firebaseio.com",
  projectId: "todo-redux-saga-b7260",
  storageBucket: "todo-redux-saga-b7260.appspot.com",
  messagingSenderId: "888109302983",
  appId: "1:888109302983:web:45ed2527b5346795a32ae2",
  measurementId: "G-9D9WEV82YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);


export const storage = getStorage(app);


export const storRef = ref;