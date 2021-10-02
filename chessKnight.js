/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
*/

function chessKnight(cell) {
    //Create a character code representation of the letter cell.
    let col = cell.charCodeAt(0);
    let row = Number(cell[1]);
    let totalSpaces = 0;
    
    if(col + 2 <= 104) {
        //If we can go 2 spaces to the right, check the one up and one down.
        if(row + 1 <= 8) totalSpaces++;
        if(row - 1 >= 1) totalSpaces++;
    }

    if(row + 2 <= 8) {
        //If we can go 2 spaces up, check one left and one right.
        if(col + 1 <= 104) totalSpaces++;
        if(col - 1 >= 97) totalSpaces++;
    }
    
    if(col - 2 >= 97) {
        //If we can go 2 spaces to the left, check the one up and one down.
        if(row + 1 <= 8) totalSpaces++;
        if(row - 1 >= 1) totalSpaces++;
    }
    
    if(row - 2 >= 1) {
        //If we can go 2 spaces down, check one left and one right.
        if(col + 1 <= 104) totalSpaces++;
        if(col - 1 >= 97) totalSpaces++;
    }
    
    return totalSpaces;
}
