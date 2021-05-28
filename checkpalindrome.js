//Given a string, check if it is a palindrome

function checkPalindrome(inputString) {
    return inputString.split("").reverse().join("") === inputString;
}
