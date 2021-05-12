/*
Given two cells on the standard chess board, determine whether they have the same color or not.
*/

function chessBoardCellColor(cell1, cell2) {
    let cell1Color;
    let cell2Color;
    if(cell1.charCodeAt(0) % 2 === cell1.charCodeAt(1) % 2) {
        cell1Color = 'dark';
    } else {
        cell1Color = 'light';
    }
    if(cell2.charCodeAt(0) % 2 === cell2.charCodeAt(1) % 2) {
        cell2Color = 'dark';
    } else {
        cell2Color = 'light';
    }
    return cell1Color === cell2Color;
}
