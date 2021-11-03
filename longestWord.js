//Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function longestWord(text) {
    let words = [];
    let currentWord = "";
    for(let i = 0; i < text.length; i++) {
        //If this is a letter, add to the current word.
        if(text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123 || 
        text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
            currentWord += text[i];
        } else {
            //Otherwise, add the last word built to the array and start over with a new word.
            if(currentWord.length) {
                words.push(currentWord);
                currentWord = "";
            }
        }
        //If at the end, add the last group of letters.
        if(i === text.length - 1 && currentWord.length) words.push(currentWord); 
    }
    
    //Keep track of the longest word and length.
    let longestLength = 0;
    let longestWord = "";
    
    //Go through each word and see if its length is longer than the current longest.
    words.forEach(word => {
        if(word.length > longestLength) {
            longestLength = word.length;
            longestWord = word;
        }
    });
    
    return longestWord;
}
