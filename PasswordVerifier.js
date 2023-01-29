let pass = prompt("enter Your Password (only numeric ) to set first Time...")
pass = Number.parseInt(pass);
const cn =pass;

let login = confirm("Your Password will Be Set Now If You Want To Login Click  On OK ")
if(login){
let password = prompt("enter Your Password ...")
password = Number.parseInt(password)

while(cn!=password){

    alert("Wrong Password entered...");
    let tryAgain = confirm("Try Again");
    if(tryAgain){
     let correct = prompt("Enter Your Password...");
     correct = Number.parseInt(correct);
     password =correct;
    }else{
        break;
    }
}
if(cn==password){
  
    document.getElementById("backchnage").innerHTML="Successfully Loged In \n Exploree Noww...!!";
    let change=document.getElementById("backchnage");
    change.style.backgroundColor="green";
}
}else{
    alert("Your Password Will Be Set Now  Remember Your Password so Next Time You Can Login Easily ");
}
