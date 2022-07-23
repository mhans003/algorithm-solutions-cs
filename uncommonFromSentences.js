var uncommonFromSentences = function(s1, s2) {
    let s1_words = s1.split(" ");
    let s2_words = s2.split(" ");
    //Save words shared in each word (which are non-duplicated in a sentence) to prevent from being part of output.
    let saved = [];
    //Generate output of uncommon words.
    let output = [];
    //Save words that appear more than once in a sentence.
    let duplicated = [];
    
    while(s1_words.length) {
        let thisWord = s1_words.pop();
        
        //Make sure there is no other instance of this word in the current sentence.
        if(!s1_words.includes(thisWord) && !duplicated.includes(thisWord)) {
            //Check if this word is in the other sentence.
            if(!s2_words.includes(thisWord)) {
                //If it is not in the other sentence, make sure it isn't already in the output array. If not, push it.
                if(!output.includes(thisWord)) output.push(thisWord);
            } else {
                //Save this word.
                saved.push(thisWord);
            }
        } else {
            duplicated.push(thisWord);
        }
    }
    
    while(s2_words.length) {
        let thisWord = s2_words.pop();
        
        if(!s2_words.includes(thisWord) && !duplicated.includes(thisWord)) {
            if(!saved.includes(thisWord) && !output.includes(thisWord)) output.push(thisWord);
        } else {
            duplicated.push(thisWord);
        } 
    }
    
    return output;
};