// For reference. These are the character codes if I need to use String.fromCharCode(charCode)
// var specialCharsRange = ["33-47", "58-64", "91-96", "123-126"];
// var numericCharsRange = "48-57";
// var uppercaseRange = "65-90";
// var lowercaseRange = "97-122";

window.addEventListener('load', getPasswordRequirements);
displayPasswordToTextArea();

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", displayPasswordToTextArea);

document.getElementById("copy").addEventListener("click", copyPassword);



const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
const specialChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];

var pwLength;
var numsReq;
var lowercaseReq;
var uppercaseReq;
var specialsReq;
var charSet;

function getPasswordRequirements() {
  // Reset requirements
  numsReq = false;
  lowercaseReq = false;
  uppercaseReq = false;
  specialsReq = false;
  charSet = [];

  // Get the requirements.
  getPasswordLength();
  getCharacterTypesReq();
  charSet = generateCharSet();

  // Display the password immediately after getting requirements.
  displayPasswordToTextArea();

  // Gets the requried password length by prompting the user. User must enter a valid number.
  function getPasswordLength() {
    if (pwLength == undefined) {
      pwLength = Number(
        prompt("How many characters should the password be? Please choose a number between 8 and 128.")
      );
      while (Number.isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        pwLength = Number(
          prompt("Please enter a valid number. How many characters should the password be? Choose a number between 8 and 128.")
        );
      }
    }
  }

  // Gets the character types required in the password by prompting the user. User must select at least one.
  function getCharacterTypesReq() {
    alert(
      "Select the character types to be included in the password in the following prompts (must select at least one)."
    );

    while (
      numsReq == false && lowercaseReq == false &&
      uppercaseReq == false && specialsReq == false
    ) {
      numsReq = confirm("Should the password contain numbers?");
      lowercaseReq = confirm("Should the password contain lowercase characters?");
      uppercaseReq = confirm("Should the password contain uppercase characters?");
      specialsReq = confirm("Should the password contain special characters?");

      if (
        numsReq == false && lowercaseReq == false &&
        uppercaseReq == false && specialsReq == false
      ) {
        alert("Please select at least one character type to be used in the password");
      }
    }
  }
}

// Returns an array of the available characters based on the user's password requirements.
function generateCharSet() {
  let charSet = [];
  if (numsReq) {
    charSet.push(...numericChars);
  }
  if (lowercaseReq) {
    charSet.push(...lowercaseChars);
  }
  if (uppercaseReq) {
    charSet.push(...uppercaseChars);
  }
  if (specialsReq) {
    charSet.push(...specialChars);
  }
  return charSet;
}


// Returns a string of random characters of a given length.
function generateRandomPassword() {
  let generatedPassword = "";
  let randomNumber;
  for (let i = 0; i < pwLength; i++) {
    randomNumber = Math.floor(Math.random() * charSet.length);
    generatedPassword += charSet[randomNumber];
  }
  return generatedPassword;
}

function displayPasswordToTextArea() {
  const passwordTextArea = document.getElementById("password");
  const generatedPassword = generateRandomPassword();
  passwordTextArea.innerHTML = generatedPassword;
}

function copyPassword() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
}