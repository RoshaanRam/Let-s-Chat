var firebaseConfig = {
    apiKey: "AIzaSyDwAfp1-3Mq6cFsxvNiz5a1iLmAre-0I4o",
    authDomain: "kwitter-67e52.firebaseapp.com",
    databaseURL: "https://kwitter-67e52-default-rtdb.firebaseio.com",
    projectId: "kwitter-67e52",
    storageBucket: "kwitter-67e52.appspot.com",
    messagingSenderId: "79005203133",
    appId: "1:79005203133:web:8f9400b5aa485ed87555d4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
   
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
   
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
   
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
   
  }
   
  getData();
   
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
   
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  