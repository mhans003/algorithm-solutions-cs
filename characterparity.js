//Given a character, check if it represents an odd digit, an even digit or not a digit at all.

function characterParity(symbol) {
    return symbol % 2 ? "odd" : isNaN(symbol % 2) ? "not a digit" : "even";
}
