//Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
    //Extract the hour and minute.
    let hour = time.substring(0, time.indexOf(":"));
    let minute = time.substring(time.indexOf(":") + 1);
    //Make sure these values are within the correct ranges.
    if(!(Math.abs(Number(hour)) <= 23 && Math.abs(Number(minute)) <= 59)) return false;
    
    return true;
}
