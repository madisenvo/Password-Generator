// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()-_=+";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";

function generatePassword() {
  var pLength = prompt("Enter your desired number of characters (Note: must be between 12 and 128).");
    if (pLength < 12 || pLength > 128){
      alert("Length must be 8-128 characters");
    } else{
      var addUpper = confirm("Include uppercase letters?")
      var addLower = confirm("Include lowercase letters?")
      var addNum = confirm("Include numbers?")
      var addSpecial = confirm("Include special characters?")
      }  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", writePassword);


