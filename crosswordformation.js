function crosswordFormation(words) {
    let workingCrossword = 0;
    
    //Loop through each possible combination of 4 words to see if it works.
    for (let first = 0; first < words.length; first++) {
        for (let second = 0; second < words.length; second++) {
            for (let third = 0; third < words.length; third++) {
                for (let fourth = 0; fourth < words.length; fourth++) {
                    if (first != second && first != third && first != fourth && 
                        second != third && second != fourth && third != fourth) {
                            workingCrossword += check(words[first],words[second],words[third],words[fourth]); 
                    }
                }
            } 
        }
    }
    
    return workingCrossword;

    function check (firstWord, secondWord, thirdWord, fourthWord) {
        let total = 0;
        //Loop through indexes of the first word that are 2 away from each other.
        for (let firstWord_1 = 0; firstWord_1 < firstWord.length; firstWord_1++) {
            for (let firstWord_2 = firstWord_1 + 2; firstWord_2 < firstWord.length; firstWord_2++) {
                
                //Loop through indexes of the second word that are two away from each other.
                for (let secondWord_1 = 0; secondWord_1 < secondWord.length; secondWord_1++) {
                    for (let secondWord_2 = secondWord_1 + 2; secondWord_2 < secondWord.length; secondWord_2++) {
                        
                        //Loop through indexes of the third word.
                        for (let thirdWord_1 = 0; thirdWord_1 < thirdWord.length; thirdWord_1++) {
                            //For each index of the third word, loop through each index of the fourth word.
                            for (let fourthWord_1 = 0; fourthWord_1 < fourthWord.length; fourthWord_1++) {
                                
                                //Indexes of the 'pair' for third and fourth words will essentially loop around.
                                let thirdWord_2 = thirdWord_1 + (firstWord_2 - firstWord_1);
                                let fourthWord_2 = fourthWord_1 + (secondWord_2 - secondWord_1);
                                
                                //As long as we are not at the end of the third and fourth words
                                if (thirdWord_2 < thirdWord.length && fourthWord_2 < fourthWord.length) {
                                    //Check if the characters at the current positions match where they should be in their 'partner' words.
                                    //If so, this is a working game.
                                    if (firstWord.charAt(firstWord_1) == secondWord.charAt(secondWord_1)
                                    && firstWord.charAt(firstWord_2) == fourthWord.charAt(fourthWord_1)
                                    && thirdWord.charAt(thirdWord_1) == secondWord.charAt(secondWord_2)
                                    && thirdWord.charAt(thirdWord_2) == fourthWord.charAt(fourthWord_2)) total++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return total;
    }
}
