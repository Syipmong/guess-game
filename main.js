
var numberToGuess = Math.floor(Math.random() * 100) + 1;

var input = document.getElementById("guess-input");
var button = document.getElementById("guess-button");
var result = document.getElementById("result");

var numberOfGuesses = 0;
button.addEventListener("click", function() {
  var guess = parseInt(input.value);
  
  if (guess === numberToGuess) {
    result.innerHTML = "Congratulations! You guessed the number in " + numberOfGuesses + " tries.";
  } else if (guess < numberToGuess) {
    result.innerHTML = "Too low! Guess again.";
    numberOfGuesses++;
  } else if (guess > numberToGuess) {
    result.innerHTML = "Too high! Guess again.";
    numberOfGuesses++;
  }
});
