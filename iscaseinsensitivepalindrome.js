//Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(inputString) {
    //Default to lower case to compare palindromes.
    let lowerString = inputString.toLowerCase();
    //If the lowercase version is a palindrome, return true;
    if(lowerString.split("").reverse().join("") === lowerString) return true;
    return false;
}
