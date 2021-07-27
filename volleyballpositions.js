/*
You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.

The team you favor plays in the following formation:

0 3 0
4 0 2
0 6 0
5 0 1
where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.
*/

function volleyballPositions(formation, k) {
    //Every 6 rotations, positions are at the same place, so don't exceed 6 rotations total for each input case.
    let totalRotations = k % 6;
    
    //Helper function to shift positions once.
    let shiftOnce = currentPositions => {
        //Define position map as a 2-dimensional array to use as a 'key' for rotation positions.
        let positionMap = [
            [0,1],
            [1,0],
            [3,0],
            [2,1],
            [3,2],
            [1,2]
        ];
        
        //Keep track of the last element as a placeholder.
        let last = currentPositions[positionMap[5][0]][positionMap[5][1]];
        
        //Loop through each position in the position map, and move the elements around once.
        for(let position = positionMap.length - 1; position > 0; position--) {
            currentPositions[positionMap[position][0]][positionMap[position][1]] =
            currentPositions[positionMap[position - 1][0]][positionMap[position - 1][1]];
        }
         
        //At the end, replace the first element with the placeholder last.   
        currentPositions[positionMap[0][0]][positionMap[0][1]] = last; 
    }
    
    //Repeat the rotation as many times as necessary.
    for(let i = 0; i < totalRotations; i++) {
        shiftOnce(formation);
    }
    
    return formation;
}