/*
You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.
*/

function createAnagram(s, t) {
    //Create character maps for each string.
    let sMap = {};
    let tMap = {};
    for(let i = 0; i < s.length; i++) {
        if(sMap[s[i]]) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(tMap[t[i]]) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    //Keep track of characters to add or remove.
    let charsToAdd = [];
    let charsToRemove = [];
    for(let character in tMap) {
        //If a character exists in the first string, add it to the correct array the correct number of times.
        if(sMap[character]) {
            if(tMap[character] - sMap[character] < 0) {
                for(let i = 0; i < Math.abs(tMap[character] - sMap[character]); i++) {
                    charsToRemove.push(character);
                }
            } else if(tMap[character] - sMap[character] > 0) {
                for(let i = 0; i < tMap[character] - sMap[character]; i++) {
                    charsToAdd.push(character);
                }
            }
            //If this character isn't in the first string, we know we need to add it.
        } else {
            for(let i = 0; i < tMap[character]; i++) {
                charsToAdd.push(character);
            }
        }
    }
  
    //If both arrays have the same length, divide the total by 2. Otherwise, return the size of the array of characters needed to be added.
    return charsToAdd.length === charsToRemove.length ? 
    Math.floor((charsToAdd.length + charsToRemove.length) / 2) :
    Math.floor(charsToAdd.length);
}
