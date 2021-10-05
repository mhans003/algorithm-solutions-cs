/* 
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/

function isLucky(n) {
    let nString = String(n);
    
    let sum1 = 0;
    for(let i = nString.length / 2; i < nString.length; i++) {
        sum1 += Number(nString[i]);
    }
    
    let sum2 = 0;
    for(let i = 0; i < nString.length / 2; i++) {
        sum2 += Number(nString[i]);
    }
    
    if(sum1 === sum2) {
        return true;
    } else {
        return false;
    }
}
