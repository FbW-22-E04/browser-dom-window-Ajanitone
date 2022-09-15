"use strict";

let guess = -2;

// Main Loop
do {
  let randomNumber10 = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  for (
    attempts = 0;
    attempts < 3 && guess != randomNumber10 && guess != -1;
    attempts++
  ) {
    guess = prompt("Guess a number from 1-10:\n");
  }
  // To quit the program
  if (guess == -1) break;
  if (guess == randomNumber10) {
    let output = `You guessed the right number!\n\n The number is ${randomNumber10}:\n\n number of tries was: ${attempts}`;
    alert(output);
    console.log(output);
  } else if (guess != randomNumber10) {
    let output = `Sorry.Wrong guesses.\n The right  number was ${randomNumber10} : Your tries ${attempts}`;
    alert(output);
    console.log(output);
  }
} while (guess != -1);

// const guessNumber = () => {
//   //generate a random integer from 1 to 10
//   const random = Math.floor(Math.random() * 10) + 1;

//   console.log(random);

//   //take input from the user
//   let number = parseInt(prompt(`Guess a number from 1 to 10`));

//   //take the input until the guess is correct

//   while (number !== random) {
//     number = parseInt(prompt(`Guess a number from 1 to 10`));
//   }
//   //check if the guess is correct
//   if (number == random) {
//     console.log(`Great!! You guessed the number. The number is ${number}`);
//   }
// };

//call the function

// guessNumber();
