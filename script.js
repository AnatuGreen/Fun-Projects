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
    repeatResult.innerText += " \n" + textToRepeat;
  }
}

//Copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
function copy() {
  const textToCopy = document.getElementById("repeatResult").innerText;
  copyToClipboard(textToCopy);
  alert("Text copied to clipboard");
}

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refresh);

function refresh() {
  document.getElementById("texttorepeat").value = "";
  document.getElementById("numberofreps").value = "";
  document.getElementById("repeatResult").innerText = "";
}
