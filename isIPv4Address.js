/* 
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function isIPv4Address(inputString) {
    let octets = inputString.split(".");
    console.log(octets);
    
    //Handle length
    if(octets.length !== 4) return false;
    
    //Handle the size of each octet
    if(!octets.every(octet => octet > -1 && octet < 256)) return false;
    
    //Handle blanks
    if(octets.some(octet => octet === "")) return false;
    
    //Handle number errors (more than one digit for single-digit numbers)
    if(octets.some(octet => octet < 10 && octet.length > 1)) return false;
    
    return true;
}