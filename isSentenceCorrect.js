/*
A sentence is considered correct if:

it starts with a capital letter;
it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
full stops, question marks and exclamation points don't appear anywhere else in the sentence.
Given a sentence, return true if it is correct and false otherwise.
*/

function isSentenceCorrect(sentence) {
    //^[A-Z] searches for a capital letter at the beginning.
    //[^.?!]* searches for 0+ instances of any character that is NOT (^) final punctuation.
    //[.?!]& searches for ending punctuation at the end of the string.
    var re = new RegExp(`^[A-Z][^.?!]*[.?!]$`);
    return re.test(sentence);
}
