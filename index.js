#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate automatically random number.
// 2) User will guess computer generated number.
// 3) compare user number with computer generated number.
// 4) given result " win or not ".
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("\n");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a Number Between 1 - 5 = ",
    }
]);
console.log("\n");
if (answer.userGuessedNumber === randomNumber) {
    console.log(" * ---~--~--~--~* You Won *~--~--~--~--- *");
    console.log("\n");
    console.log(" |  Congratulation You Guess Right Number |");
    console.log("\n");
    console.log(" * ---~--~--~--~* You Won *~--~--~--~--- * ");
}
else {
    console.log("*------------------------*");
    console.log("| You Guess Wrong Number |");
    console.log("|   You Lose Try Again ! |");
    console.log("*------------------------*");
}
