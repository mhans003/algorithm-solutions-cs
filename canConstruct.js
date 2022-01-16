/*
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

var canConstruct = function(ransomNote, magazine) {
    //Create a character map of each character in magazine to pull characters from.
    let magazineMap = {};
    //Convert to string, then create character map.
    magazine.split("").forEach(letter => {
        if(magazineMap[letter]) {
            magazineMap[letter]++;
        } else {
            magazineMap[letter] = 1;
        }
    });
    
    //Create array to iteratively pull characters from.
    let noteArray = ransomNote.split("");
    //Until the end of the array is reached, see if this letter can be pulled from the magazine map.
    while(noteArray.length) {
        let thisLetter = noteArray.pop();
        if(magazineMap[thisLetter]) {
            magazineMap[thisLetter]--;
        } else {
            return false;
        }
    }
    
    //If we have reached the end of the noteArray, we know magazine can be used to create the note.
    return true;
};