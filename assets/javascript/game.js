//set word array and other related variables
words = [violin, trumpet, bassoon, piano, harp];
currentWord = "";
blankWord = "";
wins = 0;
guesses = "";
guessCount = 12;

for (var i=0; i<words.length; i++) {
    currentWord = words[i];
    console.log(currentWord);
    for (var j=0; j<currentWord.length; j++) {
        blankWord += "_";
        console.log(blankWord);
    }

}
