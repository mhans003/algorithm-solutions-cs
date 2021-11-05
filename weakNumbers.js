/*
We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

what is the weakness of the weakest numbers in the range [1, n]?
how many numbers in the range [1, n] have this weakness?
Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.
*/

function weakNumbers(n) {
    let output = [0, 0];
    //Keep track of how many numbers in this range 1-n that have a given index as weakness level.
    let weaknessMap = {};
    //Keep track of factor numbers for each number in the range 1-n.
    let factors = {};
    //Get all factors within this range. Each time, determine weakness.
    for(let i = 1; i <= n; i++) {
        factors[i] = 0;
        let max = n;
        for(let j = 1; j < max; j++) {
            if(i % j === 0) {
                if(i / j === j) {
                    factors[i]++;
                } else {
                    factors[i] += 2;
                }
                max = i / j;
            }
        }
        //Now that we got all the factors, determine weakness and save.
        let weakness = 0;
        for(let number in factors) {
            if(factors[number] > factors[i] && number !== i) {
                weakness++;
            }
        }
        if(weaknessMap[weakness]) {
            weaknessMap[weakness]++;
        } else {
            weaknessMap[weakness] = 1;
        }
    }
    
    //Get the weakest value 
    let maxWeakness = 0;
    for(let weakness in weaknessMap) {
        if(Number(weakness) > maxWeakness) maxWeakness = Number(weakness); 
    }
    //Save the values in the output as directed.
    output[0] = Number(maxWeakness);
    output[1] = weaknessMap[maxWeakness];
    
    //Return result
    return output;
}
