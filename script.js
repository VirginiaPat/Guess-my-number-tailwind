"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// message function
const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

// compaire input value and secret number when click the check button
document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector("#score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("#highscore").textContent = score;

    document.querySelector("#number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#number").style.width = "30rem";
  }
});

// reset values by clicking again button
document.querySelector("#again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("#number").style.width = "15rem";
  document.querySelector("#guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("#score").textContent = score;
  document.querySelector("#highscore").textContent = 0;
});
