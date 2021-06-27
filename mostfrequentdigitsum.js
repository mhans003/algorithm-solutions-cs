/*
A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.
*/

function mostFrequentDigitSum(n) {
    let sequenceNumbers = {};
    let currentNumber = n;
    //While there are still numbers left in the sequence:
    while(currentNumber > 0) {
        //Get the sum of digits.
        let currentSequenceNumber = Number(String(currentNumber).split("").reduce((a, b) => Number(a) + Number(b), 0));
        //Using this sum, add this to the object map.
        if(sequenceNumbers[currentSequenceNumber]) {
            sequenceNumbers[currentSequenceNumber]++;
        } else {
            sequenceNumbers[currentSequenceNumber] = 1;
        }
        currentNumber -= currentSequenceNumber;
    }
    let mostFrequent = 0;
    for(let number in sequenceNumbers) {
        //Initially, assign the most frequent to the first number in the sequence map.
        if(mostFrequent === 0) {
            mostFrequent = number;
        }
        //See if this number occurs more than the last saved number.
        if(sequenceNumbers[number] > sequenceNumbers[mostFrequent]) {
            mostFrequent = number;
            //If the number of occurrences are the same yet this key is larger, replace the current most frequent with the larger key.
        } else if(sequenceNumbers[number] === sequenceNumbers[mostFrequent] && number > mostFrequent) {
            mostFrequent = number;
        }
    }
   
    return Number(mostFrequent);
}