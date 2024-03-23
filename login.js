import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVHqqQNCRp81-Zmpz0grNJwRumqE5zJPI",
  authDomain: "todo-app-27897.firebaseapp.com",
  databaseURL: "https://todo-app-27897-default-rtdb.firebaseio.com",
  projectId: "todo-app-27897",
  storageBucket: "todo-app-27897.appspot.com",
  messagingSenderId: "797300227558",
  appId: "1:797300227558:web:17278e21618792f1f02a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(app);
console.log(auth);

window.loginbtn = function (e) {
  e.preventDefault();
  
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  let loginform = document.getElementById('loginform');
  let todomain = document.getElementById('todomain');
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('User logged in successfully:', user);
      alert('User logged in successfully');
     window.location.href = 'TodoApp.html';
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.error('Login failed:', errorMessage);
      alert('Login failed');
    });
}
