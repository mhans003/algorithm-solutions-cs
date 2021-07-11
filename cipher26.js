/*
You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:

Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.
The number corresponding to the ith letter of the encrypted message is then equal to the sum of numbers corresponding to the first i letters of the initial unencrypted message modulo 26.
Now that you know how the message was encrypted, implement the algorithm to decipher it.
*/

function cipher26(message) {
    let runningSum = message.charCodeAt(0) - 97;
    let decodedMessage = message[0];
    
    for(let i = 1; i < message.length; i++) {
        let currentCode = message.charCodeAt(i) - 97; 
        //Based on the current code, find what value of the decoded code would yield this current code when added to the running total modulo 26.
        let decodedCode = 0;
        while((runningSum + decodedCode) % 26 !== currentCode) {
            decodedCode++;
        }
        //Update Values
        runningSum += decodedCode;
        decodedMessage += String.fromCharCode(decodedCode + 97);
    }
    
    return decodedMessage;
}
