/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

var isValidParentheses = function(s) {
    //Create a stack to hold closing parentheses.
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        //Check if this is an open or closing item.
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            switch(s[i]) {
                case '(':
                    stack.push(')');
                    break;
                case '{':
                    stack.push('}');
                    break;
                case '[':
                    stack.push(']');
                    break;
                default:
                    break;
            }
        } else {
            //The current character should be the closing parentheses at the top of the stack.
            if(s[i] !== stack.pop()) return false;
        }
    }
    //If we have reached the end and there are characters left in the stack, this is not valid.
    if(stack.length) return false;
    //Otherwise, this was a valid set.
    return true;
};