// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = "!@#$%^&*()-_=+";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";

// User prompts
function generatePassword() {
  var pLength = prompt("Enter your desired number of characters (Note: must be between 12 and 128).");
  if (pLength < 12 || pLength > 128){
    alert("Length must be between 12 and 128 characters.");
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

// minimums
  var minCount = 0;
  var numMin = '';
  var lowerMin = '';
  var upperMin = '';
  var specialMin = '';

// generating password
  var generator = {
    getNum: function() {
      return number(Math.floor(math.random() * number.length));
    },

    getLower: function() {
      return lowerCase(Math.floor(math.random() * lowerCase.length));
    },

    getUpper: function() {
      return upperCase(Math.floor(math.random() * upperCase.length));
    },

    getSpecial: function() {
      return special(Math.floor(math.random() * special.length));
    }
  };
  
  return generator.getNum;
  // if (number === true) {
  //   numMin = generator.getNum();
  //   minCount++;
  // };

  // if (lowerCase === true) {
  //   lowerMin = generator.getLower();
  //   minCount++;
  // };

  // if (upperCase === true) {
  //   upperMin = generator.getUpper();
  //   minCount++;
  // };

  // if (special === true) {
  //   specialMin = generator.getSpecial();
  //   minCount++;
  // };

  // var randomPassword = '';

  // for (let i=0; i < (parseInt(pLength) - minCount); i++) {
  //   var numPicked = Math.floor(Math.random() * 4);
  //   randomPassword += numPicked;
  // };

  //   // add characters to password
  // randomPassword += minNum;
  // randomPassword += minLower;
  // randomPassword += minUpper;
  // randomPassword += minSpecial;

  // return randomPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


