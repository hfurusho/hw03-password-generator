var specialCharsRange = ["33-47", "58-64", "91-96", "123-126"];
var numbersRange = "48-57";
var uppercaseRange = "65-90";
var lowercaseRange = "97-122";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

var numsReq = true;
var uppercaseReq = true;
var lowercaseReq = true;
var specialsReq = true;

// Returns an array of the available characters based on the user's password requirements.
function generateCharSet() {
  let charSet = [];
  console.log(numsReq, uppercaseReq, lowercaseReq, specialsReq);
  if (numsReq) {
    console.log(charSet);
    charSet.push(...numbers);
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
  console.log(charSet);
  return charSet;
}

var charSet = generateCharSet();

function generateRandomPassword(pwLength) {
  let generatedPassword = "";
  let randomNumber;
  for (let i = 0; i < pwLength; i++) {
    randomNumber = Math.floor(Math.random() * charSet.length);
    generatedPassword += charSet[randomNumber];
  }
  return generatedPassword;
}
