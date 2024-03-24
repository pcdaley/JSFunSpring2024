import prompt from "readline-sync";

// Function to get random number:

const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);};

// Constant for number:

const gameNumber = getRandomIntInclusive(1, 10);

// Game logic sketch:

const userNumber = prompt.question("Please guess a number from 1 to 10.");

const evaluate = (userNumber, gameNumber) => {
if (userNumber >10 || userNumber<1) {
  return "Please enter a number from 1 to 10.";
}
else if (userNumber === gameNumber) {
  return "Success! Game over.";
}
else if (userNumber<gameNumber) {
  return "Too low!";
}
else if (userNumber>gameNumber) {
  return "Too high!";
}};

console.log(gameNumber);


