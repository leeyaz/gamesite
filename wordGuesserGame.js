
//select mystery word from datasheet
const fs = require('fs');
const readline = require('readline');

function getWord(index) {
    const fileStream = fs.createReadStream('datasets/word_list_dataset.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentIndex = 0;

    rl.on('line', (line) => {
        const parts = line.split(',').map(part => part.trim());
        if (parseInt(parts[0]) === index) {
            console.log(parts[1]); 
            rl.close(); 
        }
        currentIndex++;
    });

    rl.on('close', () => {
        if (currentIndex < index) {
            console.log('Index out of bounds.');
        }
    });
}

getWord(1);


//ask to guess mystery word, give hints with each guess, eg: smth letters away, how many correct vowels
//keep guessing until find correct word. each guess loses a point or smth.