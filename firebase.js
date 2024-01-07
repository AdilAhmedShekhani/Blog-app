
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTU3Kky3nBhni9QMVXe-0jFLecbC70LY",
  authDomain: "my-blog-175ff.firebaseapp.com",
  projectId: "my-blog-175ff",
  storageBucket: "my-blog-175ff.appspot.com",
  messagingSenderId: "47486749247",
  appId: "1:47486749247:web:a7d8de59928cd06358468a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { addDoc, collection, getDocs, db, query, where, deleteDoc, doc };