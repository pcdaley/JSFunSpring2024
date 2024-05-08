//

import wordBank from "./word-bank.js";
import prompt from "readline-sync";

let isGameRunning = true;
let userGuessCount = 0;
let userIncorrectGuesses = 0;


//Hangman visual generation
let hangmanArray = [];
hangmanArray.push("________")
hangmanArray.push(" _|_\n|   |_____\n|         |\n|_________|");
hangmanArray.push("   _____\n  |     |\n  |\n  |\n _|_\n|   |_____\n|         |\n|_________|\n");
hangmanArray.push("   _____\n  |     |\n  |     o\n  |     | \n _|_    \ \n|   |_____\n|         |\n|_________|\n");
hangmanArray.push("   _____\n  |     |\n  |     o\n  |    /|\\ \n _|_    \ \n|   |_____\n|         |\n|_________|\n");
hangmanArray.push("   _____\n  |     |\n  |     o\n  |    /|\\ \n _|_   / \\ \n|   |_____\n|         |\n|_________|\n");
      
let hangmanIndex = 0;

      //IF WRONG: console.log(hangmanArray[hangmanIndex++]);

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");


//GET RANDOM WORD
const getRandomWord = () => {
      return wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
}
let currentWord = getRandomWord();

console.log(currentWord);

//GENERATE UNDERSCORES FOR RANDOM WORD
let wordProgress = [];
for (let i = 0; i < currentWord.length; i++) {wordProgress[i] = "_";
}

let remainingLetters = currentWord.length;

//SHOW PROGRESS
console.log(wordProgress.join(" "));

const handleUserGuess = (guess) => {
      if (guess.length !== 1) { 
                  console.log("Please enter a single letter."); 
            }  else {
                        for (let j=0; j < currentWord.length; j++) {
                              if (currentWord[j] === guess) {
                                    console.log("Correct");
                                    wordProgress[j] = guess;
                                    remainingLetters--;
                              }
                        }
                        } 

                        for (let j=0; j < currentWord.length; j++) {
                              if (currentWord[j] !== guess) {
                                    console.log("Incorrect");
                                    userIncorrectGuesses++;
                                    console.log(hangmanArray[hangmanIndex++]);
                              }
                        }
                  };

//GAME LOOP
while (isGameRunning) {
      let guess = prompt.question("Please guess a letter: ");   
      handleUserGuess(guess);
      userGuessCount++;
      if (userIncorrectGuesses===6){
            isGameRunning=false;
      }
}





// 

//PUSH HANGMAN ARRAY

