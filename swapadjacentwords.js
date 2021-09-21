/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.
*/

function swapAdjacentWords(s) {
    //Capture the entire string with .*
    return s.replace(/.*/g, (string) => {
        //Split the words into an array.
        let words = string.split(" ");
        //Loop through each pair available (igornes any odd final word).
        for(let i = 0; i < words.length - 1; i += 2) {
            //Replace this element in the current pair with its next.
            [words[i], words[i + 1]] = [words[i + 1], words[i]];
        }
        //return the sentence joined together after swaps.
        return words.join(" ");
    });
}