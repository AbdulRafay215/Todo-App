  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  console.log(app)
  
  window.Regbtn = function (e){
      e.preventDefault();
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
     createUserWithEmailAndPassword(auth , email, password)
     .then((user) => {
        var userinformation = user.userInformation;
        console.log('User registered successfully:', userinformation);
        alert('User registered successfully');
        window.location.href = "Login.html";
     })
     .catch((error) => {
        var errorMessage = error.message;
            console.error('Registration failed:', errorMessage);
            alert('Registration failed' , errorMessage);
     })
  }