//Determine if symbol is a digit

function isDigit(symbol) {
    if(!(symbol.charCodeAt(0) > 47 && symbol.charCodeAt(0) < 58)) return false;
    return true;
}
