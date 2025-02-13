
//select mystery word from datasheet
const fs = require('fs').promises; 
function getrow(index) {
    return fs.readFile("datasets/word_list_dataset", "utf8")
        .then(data => {
            const lines = data.split("\n");
            return lines[index];
        })
        .catch(err => {
            console.error("Error reading this file:", err);
            return null;
        });
}

getrow(1).then(item => {
    console.log(item);
});


//ask to guess mystery word, give hints with each guess, eg: smth letters away, how many correct vowels
//keep guessing until find correct word. each guess loses a point or smth.