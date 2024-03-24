//Game functions//


const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);};

const evaluate = (userNumber, gameNumber) => {
  if (userNumber >10 || userNumber<1) {
    return "Please enter a number from 1 to 10.";
  }
  else if (userNumber<gameNumber) {
    return "Too low!";
  }
  else if (userNumber>gameNumber) {
    return "Too high!";
  }};


//Game logic//


import prompt from "readline-sync";

console.log(getRandomIntInclusive(1, 10));

console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");

const gameNumber = console.log(getRandomIntInclusive(1, 10));

console.log(prompt.question("Please guess a number from 1 to 10"));

let userNumber = prompt.question("Please guess a number between 1 through 10: ");

if (userNumber === gameNumber) {
  console.log("Success! Game over.");
}

while (userNumber!=gameNumber) {
  console.log(evaluate());
}





