/*
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"
*/

function removeNb (n) {
    //Save the sum of this sequence (without any removed items)
    let wholeSum = (n / 2) * (1 + n);
    
    const combinations = [];
    
    //Find max possible amount that can be removed from the wholeSum total (largest 2 numbers).
    //Subtracting this from wholeSum is the MIN possible product of two removed numbers.
    let minProduct = wholeSum - (n + (n - 1));
    
    //Find min possible amount that can be removed from the wholeSum total (smallest 2 numbers).
    //Subtracting this from wholeSum is the MAX possible product of two removed numbers.
    let maxProduct = wholeSum - 3;
    
    //Find the 'range' of numbers that could contain the numbers that could be removed
    let lowest = 1;
    let max = n;
  
    while(lowest * max < minProduct || lowest * max > maxProduct) {
      if(lowest * max < minProduct) {
        lowest++;
      } else {
        max--;
      }
    }
    
    //Now using this range, iterate through every number 'a' that may have a satisfying 'b' value
    for(let a = lowest; a <= max; a++) {
      //If a has already been included (was a previous iteration's b), then move on from this iteration.
      //flat() is not being recognized by Codewars, so use concat instead to flatten
      if([].concat(...combinations).includes(a)) continue;
      //Knowing that (wholeSum - a - b) must equal a * b, find the 'matching' b, for every a.
      //When solving this equation on paper for a given a, this is what actions are performed on all values to isolate b:
      let b = (wholeSum - a) / (a + 1);
      //If this is a whole number b, we know it is a match.
      if(b % 1) continue;
      combinations.push([a, b]);
      combinations.push([b, a]);
    }
    
    //Sort by lowest 'a' 
    return combinations.sort((a, b) => a[0] - b[0]);
}