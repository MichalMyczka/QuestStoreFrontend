let userID = localStorage.getItem("loggedUserID");
let userName = localStorage.getItem("loggedUserName");
let userSurname = localStorage.getItem("loggedUserSurname");

document.getElementById("output").innerHTML = userName + " " + userSurname;
document.getElementById("output2").innerHTML = "user ID: " + userID;
