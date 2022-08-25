// Assignment Code
var generateBtn = document.querySelector("#generate");

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
generateBtn.addEventListener("click", writePassword);
  function writePassword(){
    var options = document.getElementById("popup");
    options.classList.toggle("show");
  }