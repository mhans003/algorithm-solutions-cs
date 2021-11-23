/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
*/

function validTime(time) {
    //Create number versions of this string.
    let values = time.split(":").map(str => Number(str));
    //Check if the values (hour and minutes) are within correct range.
    return values[0] < 24 && values[0] >= 0 ? 
    values[1] < 60 && values[1] >= 0 ?
    true :
    false :
    false;
}
