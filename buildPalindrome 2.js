/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
*/

function buildPalindrome(st) {
    //Helper function to check palindrome
    const checkPalindrome = checkString => {
        //Create an array out of the first and second halves of the string to check, depending on whether it has odd or even number of characters.
        let firstHalf = checkString.length % 2 === 0 ? 
                        checkString.substring(0, Math.floor(checkString.length / 2)).split("") :
                        checkString.substring(0, Math.floor(checkString.length / 2) + 1).split("");
        let secondHalf = checkString.substring(Math.floor(checkString.length / 2)).split("");
        
        //See if these two halves are the same. If we encounter different characters, it is not yet a palindrome.
        while(firstHalf.length && secondHalf.length) {
            if(firstHalf.pop() !== secondHalf.shift()) return false;
        }
        
        if(firstHalf.length || firstHalf.length) return false;
        
        return true;  
    };
    
    //Keep track of the current word we want to be a palindrome as well as offsets for the beginning and end of the string.
    
    let palindrome = st;
    let startOffset = 0;
    let endOffset = 0;
    
    //Check if this is already a palindrome.
    //If it is not, start the iterative process of removing the next character (based on start offset) and adding it to its corresponding location at the end of the string(based on the end offset).
    //At the end of each iteration, update the palindrome word and offsets, and check if it is a palindrome yet.
    while(!checkPalindrome(palindrome)) {
        let firstHalf = palindrome.substring(0, palindrome.length - endOffset);
        let secondHalf = palindrome[palindrome.length - endOffset] ? palindrome.substring(palindrome.length - endOffset) : "";
        
        let currentCharacter = palindrome[startOffset];
        
        palindrome = firstHalf + currentCharacter + secondHalf;
        startOffset++;
        endOffset++;
    }
    
    return palindrome;
}
