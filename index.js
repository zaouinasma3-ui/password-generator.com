const characters = 
"AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890<>,;:!ù*^$=)àç_è-('";

const passwordLength = 15;

let password1El =
document.getElementById("password1");

let password2El =
document.getElementById("password2");

let btn =
document.getElementById("btn");

function generatePassword() {
  let password = "" ;
  for (let i=0 ; i< passwordLength ; i++){
    let randomIndex = 
    Math.floor(Math.random() * characters.length);
    password+=
    characters[randomIndex];


  }
return password;

}

btn.addEventListener("click" , function(){
  password1El.textContent= generatePassword();
  password2El.textContent = generatePassword();
}

)
