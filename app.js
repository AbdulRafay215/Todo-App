import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase , push , set , ref , onValue , remove  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


window.addbtn = function () {
  let input1 = document.getElementById('input').value;

  let inpu = {
    input : input1
  }

  let setitem = push(ref(database , 'Todo App'));

  let inpKey = setitem.key;

  set(ref(database , `Todo App/${inpKey}`), inpu)
    .then(function () {
      console.log('Data Successfully');
      alert('Data Successfully');
    })
    .catch(function (err) {
      console.log('Failed to', err);
      alert('Failed to ' + err);
    })
};

const show = document.getElementById('display'); 
onValue(ref(database, `Todo App`), (showdata) => {
  show.innerHTML = "";
  showdata.forEach((newshowdata) => {
      let Stordata = newshowdata.val();
      let p = document.createElement('p');
      p.textContent = Stordata.input;
      show.appendChild(p);
      p.setAttribute('id', 'para');

      let delbtn = document.createElement('button');
      let deltext = document.createTextNode('Delete');
      delbtn.appendChild(deltext);
      delbtn.setAttribute('class', 'btn btn-danger  me-2 ps-4 pe-4');
      p.appendChild(delbtn);
      delbtn.setAttribute('onclick', `delbtn('${newshowdata.key}')`);

      // Edit Start Btn
      let editbtn = document.createElement('button');
      let edittext = document.createTextNode('Edit');

      editbtn.appendChild(edittext);
      p.appendChild(editbtn);
      editbtn.setAttribute('class', 'btn btn-primary ms-2 ms-2 ps-4 pe-4');
      editbtn.setAttribute('onclick', `editbtn('${newshowdata.key}')`);


      // Delete All Btn 
     // Clear previous content of buttons
buttons.innerHTML = '';

// Delete All Btn 
let delell = document.createElement('button');
let delalltext = document.createTextNode('DeleteAll');
delell.appendChild(delalltext);
buttons.appendChild(delell);
delell.setAttribute('class', 'btn btn-danger ps-4 pe-4 m-2')
delell.setAttribute('onclick', `deleteAll()`);

  });
});

window.deleteAll = function () {
  let alldel = ref(database, 'Todo App');
  set(alldel, null)
      .then(function () {
          console.log('Deleted All Todo Successfully');
          alert('Deleted All Todo Successfully');
      })
      .catch(function (error) {
          console.log('Deleted All Todo Failed', error);
          alert('Deleted All Todo Failed' , error);
      })

}

window.delbtn = function (key) {
  let del = ref(database, `Todo App/${key}`);
  set(del, null)
      .then(function () {
          console.log('Deleted Data Successfully');
          alert('Deleted Data Successfully');
      })
      .catch(function (err) {
          console.log('Deleted Data Failed', err);
          alert('Deleted Data Failed', err);
      });
}

window.editbtn = function (key) {
  let promp = prompt('Enter Update Value');
  let editref = ref(database, `Todo App/${key}`);
  set(editref, { input: promp })
      .then(function () {
          console.log('Updated Data Successfully');
          alert('Updated Data Successfully');
      })
      .catch(function (err) {
          console.log('Updated Data Failed', err);
          alert('Updated Data Failed', err);
      })
}
