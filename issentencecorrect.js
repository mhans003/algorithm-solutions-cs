function isSentenceCorrect(sentence) {
    //^[A-Z] searches for a capital letter at the beginning.
    //[^.?!]* searches for 0+ instances of any character that is NOT (^) final punctuation.
    //[.?!]& searches for ending punctuation at the end of the string.
    var re = new RegExp(`^[A-Z][^.?!]*[.?!]$`);
    return re.test(sentence);
  }