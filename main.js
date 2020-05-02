const ALPHABET = [
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
];
let key;
const KEY = document.querySelector("#key");
const GENERATE_BUTTON = document.querySelector("#generate");
GENERATE_BUTTON.addEventListener("click", () => {
  key = shuffle(ALPHABET);
  KEY.value = key.join("");
});

function shuffle(array) {
  let tempArray = [].concat(array);
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = tempArray[m];
    tempArray[m] = tempArray[i];
    tempArray[i] = t;
  }

  return tempArray;
} // Copy-pasted from https://bost.ocks.org/mike/shuffle/

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isUpper(ch) {
  var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return ucLetters.indexOf(ch) != -1;
} // Copy-pasted from https://jsperf.com/isupper-comparison/5

const PLAINTEXT = document.querySelector("#plaintext");
const CIPHERTEXT = document.querySelector("#ciphertext");
let messageLength = 0;
let ciphertext = "";
let plaintext = "";

PLAINTEXT.addEventListener("input", () => {
  plaintext = PLAINTEXT.value.split("");
  ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    if (isLetter(plaintext[i])) {
      if (isUpper(plaintext[i])) {
        ciphertext += key[
          ALPHABET.indexOf(plaintext[i].toLowerCase())
        ].toUpperCase();
      } else {
        ciphertext += key[ALPHABET.indexOf(plaintext[i])];
      }
    } else {
      ciphertext += plaintext[i];
    }
  }
  CIPHERTEXT.value = ciphertext;
});
