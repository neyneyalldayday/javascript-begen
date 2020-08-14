// Assignment Codeonst generateEl = document.getElementById("generate");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function promptLength() {
  var passwordLength = prompt("how many characters do you want in your password?");
  while (passwordLength <= 8 || passwordLength >= 128) {
    alert("please enter a value between 8 and 128");
    passwordLength = prompt("how many characters do you want in your password?");
  }
  return passwordLength;

}

function generatePassword() {
  var passwordLength = promptLength();

  var upperCase = confirm("do you want upper case letters?");
  var lowerCase = confirm("do you want lower case letters");
  var passwordNumbers = confirm("do you want numbers?");
  var passwordSymbols = confirm("do you want symbols?");

  while (!upperCase && !lowerCase && !passwordNumbers && !passwordSymbols) {
    alert("must choose at least one criteria, uppercase, lowercase, numbers, or symbols");
    var upperCase = confirm("do you want upper case letters?");
    var lowerCase = confirm("do you want lower case letters");
    var passwordNumbers = confirm("do you want numbers?");
    var passwordSymbols = confirm("do you want symbols?");
  }

  var characters = getCharacters(upperCase, lowerCase, passwordNumbers, passwordSymbols);
  

  let generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  
  writePassword(generatedPassword);

}



function getCharacters(upperCase, lowerCase, passwordNumbers, passwordSymbols) {
  var str = ""
  if (upperCase) {
    str += getRandomUpper();

  }
  if (lowerCase) {
    str += getRandomLower();
  }
  if (passwordNumbers) {
    str += getRandomNumber();
  }
  if (passwordSymbols) {
    str += getRandomSymbol();
  }
  return str;
}


// make some functions

function getRandomLower() {
  return "abcdefghijklmnopqrstuvwxyz";
}

function getRandomUpper() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function getRandomNumber() {
  return "1234567890";
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);