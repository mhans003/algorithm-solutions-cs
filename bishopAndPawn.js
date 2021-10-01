/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:
*/

function bishopAndPawn(bishop, pawn) {
    let currentSquare = bishop;
    let currentLetter = currentSquare[0];
    let currentNumber = Number(currentSquare[1]);
    
    //Check up-right
    while(currentLetter < "h" && currentNumber < 8) {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        currentNumber++;
        currentSquare = currentLetter + currentNumber;
        if(currentSquare === pawn) return true;
    }
    
    currentSquare = bishop;
    currentLetter = currentSquare[0];
    currentNumber = Number(currentSquare[1]);
    
    //Check down-right
    while(currentLetter < "h" && currentNumber > 1) {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        currentNumber--;
        currentSquare = currentLetter + currentNumber;
        if(currentSquare === pawn) return true;
    }
    
    currentSquare = bishop;
    currentLetter = currentSquare[0];
    currentNumber = Number(currentSquare[1]);
    
    //Check down-left
    while(currentLetter > "a" && currentNumber > 1) {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
        currentNumber--;
        currentSquare = currentLetter + currentNumber;
        if(currentSquare === pawn) return true;
    }
    
    currentSquare = bishop;
    currentLetter = currentSquare[0];
    currentNumber = Number(currentSquare[1]);
    
    //Check up-left
    while(currentLetter > "a" && currentNumber < 8) {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
        currentNumber++;
        currentSquare = currentLetter + currentNumber;
        if(currentSquare === pawn) return true;
    }
    
    return false;
}
