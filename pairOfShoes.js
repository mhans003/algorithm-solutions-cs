/*
Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.
*/

function pairOfShoes(shoes) {
    //Store key/value maps of how many of each size there are as well as the 'total' in all the left/right fields([0])
    let uniqueVals = {};
    let shoeSides = {};
    //Going through each shoe, tally within total of this size and total for right/left
    shoes.forEach(shoe => {
        if(uniqueVals[shoe[1]]) {
            uniqueVals[shoe[1]]++;
            shoeSides[shoe[1]] += shoe[0];
        } else {
            uniqueVals[shoe[1]] = 1;
            shoeSides[shoe[1]] = shoe[0];
        }
    });
    //If the total number of shoes of each size divided by the total left/right count for the same size, then there is a pair for each shoe.
    for(let size in uniqueVals) {
        if(uniqueVals[size] / 2 !== shoeSides[size]) return false;
    }
    return true;
}
