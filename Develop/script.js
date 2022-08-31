// Assignment Code
var generateBtn = document.querySelector("#generate");
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// User prompts
function generatePassword() {
  var pLength = prompt("Enter your desired number of characters (Note: must be between 12 and 128).");
  if (pLength < 8 || pLength > 128){
    alert("Length must be between 8 and 128 characters.");
  };

  if (pLength >= 8 && pLength <= 128) {
    var addUpper = confirm("Include uppercase letters?")
    var addLower = confirm("Include lowercase letters?")
    var addNum = confirm("Include numbers?")
    var addSpecial = confirm("Include special characters?")
  };

  if (addUpper != true && addLower != true && addNum != true && addSpecial != true){
    alert("You must select at least one character type.")
  };


// dictionary with keys and values
  var dict = {'special':special, 'lowerCase':lowerCase, "upperCase":upperCase, 'number':number}
  
  // empty variable and array to add user selection/generated password to 
  var randomPassword = '';
  const chars=[];

  // add characters based on user selection
  if (addNum === true) {
    chars.push('number');
  };

  if (addLower === true) {
    chars.push('lowerCase');
  };

  if (addUpper === true) {
    chars.push('upperCase');
  };

  if (addSpecial === true) {
    chars.push("special");
  };

// loop to randomize password
  for (let i=0; i < pLength; i++) {
    var propertyArray = chars[Math.floor(Math.random() * chars.length)];
    randomArray = dict[propertyArray];
    randomPassword += randomArray[Math.floor(Math.random() * chars.length)];
  };

  return randomPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


