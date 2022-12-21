let submit =document.getElementById("new_sub");

submit.addEventListener("click",login);

function login()
 {
    console.log("button has been clicked ");
     let user = document.getElementById("username").value;
     let password = document.getElementById("password").value;
     if(user=='admin'&password=="admin")
     {
        alert("Logged in");
        location.href="add_event.html";
     }
     else
    {
         
        alert("Invalid login");
         //document.login.write.value=user;
          
    }
}