function checkPassword(){

let password=document.getElementById("password").value;

if(password==="1234"){

window.location.href="cake.html";

}

else{

document.getElementById("error").innerHTML="❌ Wrong Password";

}

}