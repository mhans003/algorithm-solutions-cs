/*
Given two strings, find the number of common characters between them.
*/

function commonCharacterCount(s1, s2) {
    let numMatching = 0;
    let charMap1 = {};
    let charMap2 = {};
    
    for(let i = 0; i < s1.length; i++) {
        if(charMap1[s1[i]]) {
            charMap1[s1[i]]++;
        } else {
            charMap1[s1[i]] = 1;
        }
    } 
    
    for(let i = 0; i < s2.length; i++) {
        if(charMap2[s2[i]]) {
            charMap2[s2[i]]++;
        } else {
            charMap2[s2[i]] = 1;
        }
    } 
    
    console.log(charMap1);
    console.log(charMap2);
    
    for(let char in charMap1) {
        while(charMap1[char]) {
            if(charMap2[char]) {
                charMap2[char]--;
                numMatching++;
            }
            charMap1[char]--;
        }
    }
    
    return numMatching;
}
