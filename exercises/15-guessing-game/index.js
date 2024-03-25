//____________
//GAME SETUP//


  //Generate random number:
const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);};

  //Evaluate user guesses:  
const evaluate = (userNumber, gameNumber) => {
  if (userNumber >10 || userNumber<1) {
    return "\nPlease enter a number from 1 to 10.\n";}
  else if (userNumber<gameNumber) {
    return "\nToo low!\n";}
  else if (userNumber>gameNumber) {
    return "\nToo high!\n";}
  else if (userNumber === gameNumber) {
    console.log("\nCorrect! Game over.\n");}};

  //Current game number:  
const gameNumber = console.log(getRandomIntInclusive(1, 10));

  //User guess variable establishment:
let userNumber;


//________________
//GAME OPERATION//


import prompt from "readline-sync";

console.log(getRandomIntInclusive(1, 10));

console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop.\n");

console.log(prompt.question("\nPlease guess a number from 1 to 10.\n"));

while (userNumber != gameNumber) {
  let userNumber = parseInt(prompt.question("/nPlease guess a number from 1 to 10/n"), 10);
  const feedback = evaluate(userNumber, gameNumber);
  console.log(feedback);
  if (feedback === "/nCorrect! Game over./n") {
    break;}}







