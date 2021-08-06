/*
In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.
*/

function bishopDiagonal(bishop1, bishop2) {
    //See if bishops lie on different diagonals. If so, return initial values.
    if(!(Math.abs(bishop1.charCodeAt(0) - bishop2.charCodeAt(0)) === Math.abs(bishop1.charCodeAt(1) - bishop2.charCodeAt(1)))) return [bishop1, bishop2].sort();
    
    //Otherwise, find which directions each bishop will travel.

    //Helper function to move Bishops
    const moveBishops = (bishopInput, letter, number) => {
        //Taking the bishop's starting location, continue to move in the correct diagonal direction until it reaches bounds.
        let bishop = bishopInput;
        while((bishop[0] > "a" && bishop[0]) < "h" &&
        (bishop[1] > 1 && bishop[1] < 8)) {
            console.log("In a loop")
            //Update letter
            bishop = letter === "add" ? 
            String.fromCharCode(bishop.charCodeAt(0) + 1) + bishop[1] :
            String.fromCharCode(bishop.charCodeAt(0) - 1) + bishop[1];
            
            //Update number
            bishop = number === "add" ? 
            bishop[0] + String(Number(bishop[1]) + 1) :
            bishop[0] + String(Number(bishop[1]) - 1);
        }
        //Return the updated position.
        return bishop;
    };
    
    //Move Bishop 1
    let currentBishop1 = moveBishops(
        bishop1, 
        bishop1[0] > bishop2[0] ? "add" : "subtract",
        bishop1[1] > bishop2[1] ? "add" : "subtract"
    );
    
    //Move Bishop 2
    let currentBishop2 = moveBishops(
        bishop2, 
        bishop2[0] > bishop1[0] ? "add" : "subtract",
        bishop2[1] > bishop1[1] ? "add" : "subtract"
    );
    
    //Return final resting positions.
    return [currentBishop1, currentBishop2].sort();
}