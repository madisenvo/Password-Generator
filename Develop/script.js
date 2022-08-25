// Assignment Code
var generateBtn = document.querySelector("#generate");
var goBtn = document.querySelector("go");

// my additions
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbolChars = "!@#$%^&*-_=+";
// end

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", openOptions);
  function openOptions(){
    var options = document.getElementById("popup");
    options.classList.toggle("show");
  }

goBtn.addEventListener("click", writePassword);
  function writePassword(){
   
  }