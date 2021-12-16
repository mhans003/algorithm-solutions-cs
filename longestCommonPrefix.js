/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    let prefix = "";
    //Sort the strings by length.
    strs.sort((a, b) => a.length - b.length);
    //Get the longest that a prefix can be.
    let maxPrefix = strs[0];
    for(let i = 1; i <= maxPrefix.length; i++) {
        //Starting with the first letter of the shortest word, begin to check for the longest prefix.
        let currentPrefix = maxPrefix.substring(0, i);
        //Check if all elements have this current prefix at the beginning.
        if(strs.every(current => current.substring(0, i) === currentPrefix)) {
            //Set this as the longest prefix currently.
            prefix = currentPrefix;
        } else {
            //Otherwise, we have the longest prefix possible (break out).
            break;
        }
    }
    return prefix;
};