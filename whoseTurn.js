/*
Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8.

There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, as long as it is not occupied by either a friendly or an enemy knight.

The players take turns in making moves, starting with the white player. Given the configuration p of the knights after an unspecified number of moves, determine whose turn it is.
*/

function whoseTurn(p) {
    //Create arrays to store the current codes.
    let whiteConfigurations = p.slice(0, 5).split(";");
    let blackConfigurations = p.slice(6).split(";");
    
    //Get the codes for black knight.
    let black1Codes = blackConfigurations.map(knight => {
        //Find the code, combining the letter's code with the number's code.
        let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
        return code;
    });
    
    //Get the codes for white knight.
    let white1Codes = whiteConfigurations.map(knight => {
        //Find the code, combining the letter's code with the number's code.
        let code = ((knight.charCodeAt(0) - 96) + Number(knight[1])) % 2 ? "odd" : "even";
        return code;
    });
    
    //We know that if both codes (for each color) either have the same or both different values, it will be the white's turn.
    return black1Codes[0] === black1Codes[1] && white1Codes[0] === white1Codes[1] ?
    true :
    black1Codes[0] !== black1Codes[1] && white1Codes[0] !== white1Codes[1] ?
    true : 
    false;  
}
