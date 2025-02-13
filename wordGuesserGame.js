
//select mystery word from datasheet
function getword(index) {
    const fs = require('fs');
    fs.readFile("datasets/word_list_dataset", "utf8", (err, data) => {
        if (err) {
            var errmessage = "Error reading this file: " + err
            return errmessage;
        }
        const lines = data.split("\n");
        const item = lines[index];
        return item;
    });
}

console.log(getword(1));
//ask to guess mystery word, give hints with each guess, eg: smth letters away, how many correct vowels
//keep guessing until find correct word. each guess loses a point or smth.