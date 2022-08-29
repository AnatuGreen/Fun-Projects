"use strict";

const repeatButton = document.getElementById("repeatButton");
const repeatResult = document.getElementById("repeatResult");

repeatButton.addEventListener("click", repeatText);

function repeatText() {
  let textToRepeat = document.getElementById("texttorepeat").value;
  let numberOfReps = document.getElementById("numberofreps").value;
  numberOfReps = parseInt(numberOfReps);
  console.log(textToRepeat);
  console.log(numberOfReps);
  for (let i = 0; i < numberOfReps; i++) {
    console.log(textToRepeat);
    repeatResult.value += " \n" + textToRepeat;
  }
}

//Copy text to clipboard
// const copyToClipboard = (text) => {
//   navigator.clipboard.writeText(text);
// };
function copy() {
  document.getElementById("repeatResult").select();
  document.execCommand("copy");
  alert("Text copied to clipboard");
}

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refresh);

function refresh() {
  document.getElementById("texttorepeat").value = "";
  document.getElementById("numberofreps").value = "";
  document.getElementById("repeatResult").value = "";
}
