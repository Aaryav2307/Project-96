var firebaseConfig = {
      apiKey: "AIzaSyABqytHw0OesqCT5By4vcu4u2xxGgHXtRE",
      authDomain: "chat-website-c3cf9.firebaseapp.com",
      databaseURL: "https://chat-website-c3cf9-default-rtdb.firebaseio.com",
      projectId: "chat-website-c3cf9",
      storageBucket: "chat-website-c3cf9.appspot.com",
      messagingSenderId: "187897403662",
      appId: "1:187897403662:web:e7267c7ec7d0f3d5d45f5f",
      measurementId: "G-J4PBFZNT4F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function create(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose: "adding user"
      });
      
        localStorage.setItem("room_name", room_name);
        window.location = "chat_page.html"

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" +Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "chat_page.html";
      
}

function send(){
      msg = document.createElement("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      
      document.getElementById("msg").value = "";
}