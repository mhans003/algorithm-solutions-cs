/*
In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an n × m chessboard with mirrors along each edge, and it is not a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it reaches an edge or a corner of the chessboard it reflects from it and moves on.

Given the initial position and the direction of the ray, find its position after k steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board.
*/

function chessBishopDream(boardSize, initPosition, initDirection, k) {
    //Keep track of count.
    let count = 0;
    //Monitor the current directions and positions.
    let directions = [...initDirection];
    let positions = [...initPosition];
    //Helper function to perform move on either dimension.
    const movePosition = position => {        
        //Make sure this dimension can be moved upward/downward.
        if(directions[position] === 1) {
            //Check if moving this upward is within bounds.
            if(positions[position] + directions[position] <= boardSize[position] - 1) {
                positions[position] += directions[position];
            } else {
                //Flip the direction of this dimension
                directions[position] *= -1;
            }
        } else {
            //Check if moving this downward is within bounds.
            if(positions[position] + directions[position] >= 0) {
                positions[position] += directions[position];
            } else {
                //Flip the direction of this dimension
                directions[position] *= -1;
            }    
        }
    };
    
    //Loop to perform moves.
    while(count < k) {
        //Perform move on each dimension.
        movePosition(0);
        movePosition(1);
        //update iteration count.
        count++;
        //Once the positions and directions are again the same as how they started:
        if(positions[0] === initPosition[0] && positions[1] === initPosition[1] &&
        directions[0] === initDirection[0] && directions[1] === initDirection[1]) {
            //In order to prevent too many iterations, once the original positions and directions are arrived at again, only go as many more iterations as needed to reach the desired position.
            if(count > 0) k = count + (k % count);
        }    
    }
    
    //Return final positions.
    return positions;
}
