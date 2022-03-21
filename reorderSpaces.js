/*
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.
*/

var reorderSpaces = function(text) {
    let spaces = 0;
    let result = "";
    
    //Count spaces 
    for(let i = 0; i < text.length; i++) {
        if(text[i] === " ") spaces++;
    }
    
    //Save all words.
    let words = text.split(" ").filter(word => word !== "");
    
    //Find number of spaces between each word and any leftover (make exceptions for if there is only one word to prevent division by 0).
    let spacesBetween = words.length - 1 === 0 ? 0 : Math.floor(spaces / (words.length - 1));
    let spacesAfter = words.length - 1 === 0 ? spaces : spaces % (words.length - 1);
    
    //Put the strings back together.
    words.forEach((word, index) => {
        //Add this word to the result.
        result += word;
        
        //If this is the end, put leftover spaces.
        if(index === words.length - 1) {
            //Add spaces to the end.
            for(let i = 0; i < spacesAfter; i++) {
                result += " ";
            }
        } else {
            //Otherwise, add spaces after this word.
            for(let i = 0; i < spacesBetween; i++) {
                result += " ";
            }
        }
    });
    
    return result;
};