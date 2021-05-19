//Assuming that your hunch is correct, decode the message.

function messageFromBinaryCode(code) {
    //Extract the binary code in groups of 8 bits.
    let letters = [];
    for(let i = 0; i < code.length; i += 8) {
        let thisLetter = "";
        for(let j = i; j < i + 8; j++) {
            thisLetter += code[j];
        }
        letters.push(thisLetter);
    }
    //For each byte, find the binary value in decimal (reverse the string so that we can use the indexes from left to right).
    let codes = [];
    letters.forEach(letter => {
        let thisLetter = letter.split("").reverse().join("");
        console.log(thisLetter);
        let thisCode = 0;
        for(let i = 0; i < letter.length; i++) {
            if(thisLetter[i] === "1") thisCode += 2 ** i;
        }
        codes.push(thisCode);
    });
    
    //Build the message using the decimal values.
    let message = "";
    codes.forEach(thisCode => {
        message += String.fromCharCode(thisCode);
    });
    
    return message;
}