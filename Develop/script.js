// Assignment code here
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lettersLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var lettersUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  

  return "Generated password here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
window.alert("This ia a Password Prompt,Click ok for next prompt");
if (password === passwordText) {
  numbers;
  window.alert("Use numbers in Password")
} 
// else()
  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
