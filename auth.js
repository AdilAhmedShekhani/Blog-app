import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function signupFunc() {
  console.log("signupFunc");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(function (success) {
      console.log(success, "success");
      alert("successfully signup");
      window.location.href = "./index.html";
    })
    .catch(function (error) {
      console.log(error.code, "error");
      alert(error.code);
    });
}

function loginFunc() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(function (success) {
      console.log(success, "success");
      localStorage.setItem("uid", success.user.uid);
      alert("successfully login");
      window.location.replace("./dashboard.html");
    })
    .catch(function (error) {
      console.log(error.code, "error");
      alert(error.code);
    });
}

window.addEventListener("load", function () {
  console.log("blog load");
  var uid = localStorage.getItem("uid");
  console.log(uid, "uid");

  if (uid) {
    location.replace("./dashboard.html");
    return;
  }
});

///function assign
window.signupFunc = signupFunc;
window.loginFunc = loginFunc;