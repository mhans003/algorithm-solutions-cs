/*
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.
*/

var uniqueMorseRepresentations = function(words) {
    let codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    //Store unique transformations to count.
    let transformations = [];
    
    words.forEach(word => {
        //Store the current transformation of this word.
        let transformation = "";
        
        //Build the transformation for this word.
        word.split("").forEach(letter => {
            //Using the codes array, get the index for the corresponding letter.
            transformation += codes[getMorseCodeIndex(letter)];
        });
                
        //If this transformation is unique, add it to the transformations array.
        if(!transformations.includes(transformation)) transformations.push(transformation);
    });
    
    //Return the number of unique transformations.
    return transformations.length;
    
    //Helper function to get the index of the codes array that corresponds to this letter.
    function getMorseCodeIndex(letter) {
        //Depending on which letter this is, get relative number of the alphabet away from code 97 for 'a'
        return letter.charCodeAt(0) - 97;
    }
};