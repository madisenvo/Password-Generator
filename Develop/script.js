// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()-_=+";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";

// User prompts
function generatePassword() {
  var pLength = prompt("Enter your desired number of characters (Note: must be between 12 and 128).");
    if (pLength < 12 || pLength > 128){
      alert("Length must be between 12 and 128 characters.");
    } else{
      var addUpper = confirm("Include uppercase letters?")
      var addLower = confirm("Include lowercase letters?")
      var addNum = confirm("Include numbers?")
      var addSpecial = confirm("Include special characters?")
      } 
    if (addUpper != true && addLower != true && addNum != true && addSpecial != true){
      alert("You must select at least one character type.")
    }

    
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


