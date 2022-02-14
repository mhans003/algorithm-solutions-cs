/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

var removeOuterParentheses = function(s) {
    
    //Keep track of whether there is an open outer parentheses at any given point.
    let removeStack = [];
    //Store indexes of characters to remove.
    let removeIndexes = [];
    //Keep track of the current inner parentheses.
    let keepStack = [];
    
    for(let i = 0; i < s.length; i++) {
        //If this is (
        if(s[i] === "(") {
            //Determine if this is an 'outer' set. If so, move it to the removeStack.
            if(!removeStack.length) {
                //If the remove stack is empty, push the open parentheses and store this as a position to remove.
                removeStack.push(s[i]);
                removeIndexes.push(i);
            } else {
                //If the remove stack is not empty, it means this is not outer parentheses
                keepStack.push(s[i]);
            }
        //If this is )
        } else {
            //If there is anything still in the keepStack, this is the closing for a set in the keepStack. Remove it.
            if(keepStack.length) {
                keepStack.pop();
            } else {
                //Otherwise, this is a closing parentheses for the outer set. Store this as an index to remove.
                removeStack.pop();
                removeIndexes.push(i);
            }
        }
    }
    
    //Using the stored indexes to remove, iterate through string, removing characters, and turn back into string.
    return s.split("").filter((char, index) => {
        if(!removeIndexes.includes(index)) {
            return char;
        }
    }).join("");
};