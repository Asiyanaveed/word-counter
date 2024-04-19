#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence for count the word:"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word after count is: ${words.length}`);
