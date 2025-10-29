const characters = [
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
  "Z",
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
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// DOM for displaying passwords
let firstPasswordDisplay = document.getElementById("password-display-one");
let secondPasswordDisplay = document.getElementById("password-display-two");

// Password Randomizer
function generate_password() {
  let generatedFirstPass = "";
  let generatedSecondPass = "";
  for (let i = 0; i < 13; i++) {
    generatedFirstPass +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  for (let i = 0; i < 13; i++) {
    generatedSecondPass +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  firstPasswordDisplay.placeholder = generatedFirstPass;
  secondPasswordDisplay.placeholder = generatedSecondPass;
}

//Generate Passwords button
let generatePasswordsButton = document.getElementById("generate-btn");
generatePasswordsButton.addEventListener("click", generate_password);

// Copy to Click feature
firstPasswordDisplay.addEventListener("click", copy_first_generated_password);
secondPasswordDisplay.addEventListener("click", copy_second_generated_password);
let textToCopy = "";

function copy_first_generated_password() {
  let textToCopy = firstPasswordDisplay.placeholder;
  if (!textToCopy) {
    error_toast.classList.add("show");
    setTimeout(() => {
      error_toast.classList.remove("show");
    }, 2000);
  } else {
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
}

function copy_second_generated_password() {
  let textToCopy = secondPasswordDisplay.placeholder;
  if (!textToCopy) {
    error_toast.classList.add("show");
    setTimeout(() => {
      error_toast.classList.remove("show");
    }, 2000);
  } else {
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
}
