/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
*/

var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u'];
    //Check each character in string and if vowel, save in an array.
    let stringVowels = s.split("").filter(char => {
        if(vowels.includes(char.toLowerCase())) return char;
    });
    //Iterate through string. If character is vowel, replace it with the LAST element in the array of vowels from the string. 
    return s.split("").map(char => {
        if(vowels.includes(char.toLowerCase())) return stringVowels.pop();
        return char;
    }).join("");
};