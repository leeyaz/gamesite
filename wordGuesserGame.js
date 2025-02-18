const readline = require('readline');
const fs = require('fs');
const readlineModule = require('readline');
const { PassThrough } = require('stream');

// Function to get the word from the dataset based on the index
function getWord(index) {
    const fileStream = fs.createReadStream('datasets/word_list_dataset.txt');
    const rl = readlineModule.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentIndex = 0;

    rl.on('line', (line) => {
        const parts = line.split(',').map(part => part.trim());
        if (parseInt(parts[0]) === index) {
            console.log(`The word at index ${index} is: ${parts[1]}, the category is: ${parts[2]}`);
            rl.close();  // Stop reading after we find the word
        }
        currentIndex++;
    });

    rl.on('close', () => {
        if (currentIndex < index) {
            console.log('Index out of bounds.');
        } else {
            console.log("Found it! (test)");
            return;
        }
    });
}

// Create a readline interface for user input
const rlInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for an index
rlInput.question('Please enter an index number: ', (input) => {
    const index = parseInt(input);

    if (isNaN(index)) {
        console.log('Please enter a valid number.');
    } else {
        // Call the getWord function with the user input
        getWord(index);
    }

    rlInput.close();
});


//ask to guess mystery word, 
//give hints with each guess, eg: smth letters away, how many correct vowels
//keep guessing until find correct word. each guess loses a point or smth.