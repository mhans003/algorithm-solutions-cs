/*
We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
*/

var isOneBitCharacter = function(bits) {
    //Put all bits into groups according to the rules (10, 11, or 0).
    let groups = [];
    for(let i = 0; i < bits.length; i++) {
        let thisGroup = [];
        if(bits[i] === 1) {
            //If this bit is a 1, it means the next bit must be part of this group.
            thisGroup.push(bits[i]);
            thisGroup.push(bits[i + 1]);
            groups.push(thisGroup);
            //Skip over next element, since it is part of this group.
            i++;
        } else {
            //If this bit is a 0, it means this is on its own.
            thisGroup.push(bits[i]);
            groups.push(thisGroup);
        }
    }
    //Remove the last group. If this is a single zero, return true.
    let lastGroup = groups.pop();
    if(lastGroup.length === 1 && lastGroup[0] === 0) return true;
    return false;
};