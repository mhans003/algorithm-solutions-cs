/*
Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.
*/

function timedReading(maxLength, text) {
    let textStripped = "";
    for(let i = 0; i < text.length; i++) {
        //Add this character to the stripped version if it is a letter or space.
        if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90 ||
           text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ||
           text.charCodeAt(i) === 32) {
               textStripped += text[i];
           }
    }
    //Split the stripped text into individuals words, filter out the longer ones, and count the number of remaining words.
    return textStripped.split(" ").filter(word => word.length <= maxLength && word.length > 0).length;
}
