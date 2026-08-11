// Common JS - import readline module
const readline = require("readline");

// Interface to talk with terminal
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}`);
    input.close();
})