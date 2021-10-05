/*
A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
*/

function isMAC48Address(inputString) {
    let groups = inputString.split("-");
    //Return early if this array is not 6 valid groups of 2 characters
    if(groups.length !== 6) return false;
    //Return early if this array's elements are not 2 characters long.
    for(let i = 0; i < groups.length; i++) {
        if(groups[i].length !== 2) return false;
    }
    
    console.log(groups);
    
    //Make sure the characters in each element are valid
    for(let i = 0; i < groups.length; i++) {
        //Go through each character of all groups, and make sure it is between 0-9 or A-F.
        if(!(groups[i].charCodeAt(0) > 47 && groups[i].charCodeAt(0) < 58 ||
        groups[i].charCodeAt(0) > 64 && groups[i].charCodeAt(0) < 71)) {
            return false;
        }
        if(!(groups[i].charCodeAt(1) > 47 && groups[i].charCodeAt(1) < 58 ||
        groups[i].charCodeAt(1) > 64 && groups[i].charCodeAt(1) < 71)) {
            return false;
        }
    }
    
    return true;
}
