/*
Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than 32.
Note, that the combs can not be rotated/reversed.
*/

function combs(comb1, comb2) {
    //Keep track of array versions of both combs.
    let comb1Copy = comb1.split("");
    let comb2Copy = comb2.split("");
    //Keep track of the total number of space maintained by both versions of a shift.
    let leftSplit = 0;
    let rightSplit = 0;
    //Keep track of the number of spaces removed.
    let offset = 0;
    //Shift comb1 to the left (Add remaining length of comb1 to offset)
    while(comb1Copy.length && leftSplit === 0) {
        comb1Copy.shift();
        offset++;
        //Check all places to see if this is a valid 'combination'
        let valid = true;
        for(let i = 0; i < Math.min(comb1Copy.length, comb2Copy.length); i++) {
            if(comb1Copy[i] === "*" && comb2Copy[i] === "*") {
                valid = false;
            }
        }
        if(valid) leftSplit = Math.max(comb1Copy.length, comb2Copy.length) + offset;
        
    }
    //Reset values to do other split.
    comb1Copy = comb1.split("");
    comb2Copy = comb2.split("");
    offset = 0;
    //Shift comb2 to the left (Add remaining length of comb1 to offset) and repeat process.
    while(comb2Copy.length && !rightSplit) {
        comb2Copy.shift();
        offset++;
        //Check all places
        let valid = true;
        for(let i = 0; i < Math.min(comb2Copy.length, comb1.length); i++) {
            if(comb2Copy[i] === "*" && comb1[i] === "*") {
                valid = false;
            }
        }
        if(valid) rightSplit = comb1.length + offset;
    }
    //Return the version of the shift that takes up the least space.
    return Math.min(leftSplit, rightSplit);
}
