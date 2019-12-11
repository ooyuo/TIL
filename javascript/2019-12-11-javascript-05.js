// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const intro = document.querySelector(".intro"),
  range = document.querySelector(".range"),
  showChoosedNumber = document.querySelector(".showChoosedNumber"),
  form = document.querySelector("form"),
  input = form.querySelector("input"),
  play = form.querySelector(".play"),
  result = document.querySelector(".result");
let rangeNumber = 0;

function handlePlay() {
  if (input !== "") {
    const chooseNumber = input.value;
    showChoosedNumber.innerText = `You chose: ${chooseNumber}, the machine chose: ${rangeNumber}`;
    result.innerText = chooseNumber == rangeNumber ? `You Won!` : `You lost!`;
  }
}

function showRangeNumber() {
  rangeNumber = range.value;
  intro.innerText = `Generate a number between 0 and ${rangeNumber}`;
}

function init() {
  range.addEventListener("change", showRangeNumber);
  play.addEventListener("click", handlePlay);
}
init();
