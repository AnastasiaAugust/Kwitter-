// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjN2NUuCup_7Wr2NOp5TG9tBX2UGFDpJA",
    authDomain: "kwitter-8cc7b.firebaseapp.com",
    databaseURL: "https://kwitter-8cc7b-default-rtdb.firebaseio.com",
    projectId: "kwitter-8cc7b",
    storageBucket: "kwitter-8cc7b.appspot.com",
    messagingSenderId: "898375821523",
    appId: "1:898375821523:web:0e455d4443704898224c26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}