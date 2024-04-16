import wordBank from "./word-bank.js";
import prompt from "readline-sync";

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
let currentWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();


//GENERATE UNDERSCORES FOR RANDOM WORD
let wordProgress = [];
for (let i = 0; i < currentWord.length; i++) {wordProgress[i] = "_";
}

let remainingLetters = currentWord.length;

//

const letter = prompt.question("Please guess a letter: ");
