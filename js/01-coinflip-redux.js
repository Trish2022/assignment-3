// coin flip

// Declare a variable called coinFlip. Do not assign the variable a number just yet.
let headsCount = 0;
let tailsCount = 0;
let maxFlips = parseInt(prompt('How many times do you want to flip the coin?'))
// Create a for loop that loops a certain amount of times, collected from the user via a prompt.
// Within the for loop assign a randomly generated number to coinFlip. You will have to use the same Math formula that you used in the previous assignment to get this number.
for (i = 1; i <= maxFlips; i++) {
    console.log (i);
    let flips = Math.round(Math.random() * 2);
    if (flips === 0) {
        headsCount ++;

    } else {
        tailsCount += 1;
    }
}

console.log(`Heads: ${headsCount}`);
console.log(`Tails: ${tailsCount}`);