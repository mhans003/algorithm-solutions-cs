/*
Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
*/

function phoneCall(min1, min2_10, min11, s) {    
    let centsLeft = s;
    let totalMinutes = 0;
    
    //Purchase first minute.
    if(centsLeft - min1 >= 0) {
        totalMinutes++;
        centsLeft -= min1;
    }
    //Purchase minutes 2-10.
    while(totalMinutes < 10 && centsLeft - min2_10 >= 0) {
        totalMinutes++;
        centsLeft -= min2_10;
    }
    //Purchase minutes past 10th.
    while(totalMinutes >= 10 && centsLeft - min11 >= 0) {
        totalMinutes++;
        centsLeft -= min11;
    }
    
    return totalMinutes;
}
