//Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(inputString) {
    //Start with a blank prefix and starting index.
    let prefix = "";
    let currentIndex = 0;
    //Loop through every character until we are no longer finding a digit, and add to the prefix.
    while(inputString.charCodeAt(currentIndex) > 47 && inputString.charCodeAt(currentIndex) < 58 && currentIndex < inputString.length) {
        prefix += inputString[currentIndex];
        currentIndex++;
    }
    return prefix;
}
