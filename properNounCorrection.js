//Proper nouns always begin with a capital letter, followed by small letters.

//Correct a given proper noun so that it fits this statement.

function properNounCorrection(noun) {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}
