/*
You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?
*/

function magicalWell(a, b, n) {
    //Keep track of total.
    let total = 0;
    //Each time a marble is cast, find the new total, update values, and decrease marbles.
    while(n > 0) {
        total += (a * b);
        a++;
        b++;
        n--;
    }
    return total;
}
