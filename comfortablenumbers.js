/*
Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?
*/

function comfortableNumbers(l, r) {
    //Get starting pairs for a and b.
    let a = l;
    let b = a + 1;
    //Keep track of comfortable pairs.
    let count = 0;
    while(a < r && b <= r) {
        //Get the comfortable range for a.
        let aMin = a - String(a).split("").reduce((total, current) => {
            return total += Number(current);
        }, 0);
        let aMax = a + String(a).split("").reduce((total, current) => {
            return total += Number(current);
        }, 0);
        //Get the comfortable range for b.
        let bMin = b - String(b).split("").reduce((total, current) => {
            return total += Number(current);
        }, 0);
        let bMax = b + String(b).split("").reduce((total, current) => {
            return total += Number(current);
        }, 0);
        //If b is with the comfortable range (and a is comfortable with the b range), add to the count.
        if(b >= aMin && b <= aMax && a !== b
        && a >= bMin && a <= bMax && a !== b) count++;
        //Move onto next pair.
        if(b < r) {
            b++;
        } else {
            a++;
            b = a + 1;
        }
    }
    return count;
}
