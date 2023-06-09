// Your Script here.
function rot13(str) {
  var decodedStr = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char.match(/[A-Z]/)) {
      // Get the character code of the current character
      var charCode = str.charCodeAt(i);

      
      if (charCode >= 65 && charCode <= 77) {
        char = String.fromCharCode(charCode + 13);
      } else {
        char = String.fromCharCode(charCode - 13);
      }
    }

    
    decodedStr += char;
  }

  return decodedStr;
}
var encodedString = 'EBG13 rknzcyr.';
var decodedString = rot13(encodedString);
console.log(decodedString);


const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
