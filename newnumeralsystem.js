/*
Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.
*/

function newNumeralSystem(number) {
    let pairs = [];
    //Save the char code of this 'number'
    let largeCode = number.charCodeAt(0);
    //Using the letter A as the base for the smaller code, start constructing addition expressions until the two codes meet.
    for(let i = 65; i <= largeCode; i++) {
        pairs.push(`${String.fromCharCode(i)} + ${String.fromCharCode(largeCode)}`);
        largeCode--;
    }
    return pairs;
}