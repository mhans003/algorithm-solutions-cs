/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
*/

var maxNumberOfBalloons = function(text) {
    const letters = {};
    let iterations = 0;
    
    //Map out each letter
    for(let i = 0; i < text.length; i++) {
        //Skip letters that aren't b, a, l, o, or n.
        if(!(text[i] === 'b' || text[i] === 'a' || text[i] === 'l' || text[i] === 'o' || text[i] === 'n')) continue;
        if(letters[text[i]]) {
            letters[text[i]]++;
        } else {
            letters[text[i]] = 1;
        }
    }
    
    //See how many iterations of the word exist.
    while(letters['b'] >= 1 && letters['a'] >= 1 && letters['l'] >= 2 && letters['o'] >= 2 && letters['n'] >= 1) {
        iterations++;
        //Take this iteration out of the letters map.
        letters['b']--;
        letters['a']--;
        letters['l'] -= 2;
        letters['o'] -= 2;
        letters['n']--;
    }
    
    return iterations;
};