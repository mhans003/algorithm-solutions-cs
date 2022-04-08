/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.
*/

var toGoatLatin = function(sentence) {
    //Create array version of words.
    let words = sentence.split(" ");
    
    return words.map((word, index) => {
        //Store this new word (start as normal version)
        let newWord = word;
        
        //See if vowel or consonant; Perform action.
        switch(newWord[0].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                newWord += "ma";
                break;
            default:
                newWord = newWord.substring(1) + newWord[0] + "ma";
                break;
        }
        
        //Add as many 'a' as necessary depending on current index.
        for(let i = 0; i < index + 1; i++) {
            newWord += "a";
        }
        
        //Return the formatted word (when finished with all, join into string).
        return newWord;
    }).join(" ");
};