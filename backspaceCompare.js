/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

var backspaceCompare = function(s, t) {
    //Build the 'typed' string for each input.
    let current_s = typeString(s);
    let current_t = typeString(t);
    
    return current_s === current_t ? true : false;
    
    //Helper function to 'type out' string.
    function typeString(str) {
        //Store typed-out string in array form.
        let current_str = [];
        
        for(let i = 0; i < str.length; i++) {
            //Remove the last character if this is a #, otherwise add to it.
            if(str[i] === "#") {
                current_str.pop();
            } else {
                current_str.push(str[i]);
            }
        }
        
        //Return string representation.
        return current_str.join("");
    }
};