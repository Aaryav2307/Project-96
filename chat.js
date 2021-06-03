function login() {
    user_name = document.getElementById("user_name").value;
    window.location = "chat.html"
    localStorage.setItem("user_name", user_name);
}

function logout(){
    window.location = "index.html"
    
}
