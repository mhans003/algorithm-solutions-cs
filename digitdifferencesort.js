/*
Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.
*/

function digitDifferenceSort(a) {
    let differenceMap = {};
    //Find the difference of all elements and map them out.
    a.forEach(element => {
        //Find the largest and smallest digits.
        let largest = 0;
        let smallest = 9;
        let currentNumber = element;
        while(currentNumber) {
            let lastDigit = currentNumber % 10;
            //Compare this digit to the current largest/smallest digits.
            largest = Math.max(largest, lastDigit);
            smallest = Math.min(smallest, lastDigit);
            //Update number to go to the next digit.
            currentNumber = Math.floor(currentNumber / 10);
        }
        //Find the difference and store it.
        let difference = largest - smallest;
        if(differenceMap[difference]) {
            //Unshift the elements so that they are in the correct order.
            differenceMap[difference].unshift(element);
        } else {
            differenceMap[difference] = [element];
        }
    });
    //Turn the difference map into a sorted array.
    let differenceArray = [];
    for(let difference in differenceMap) {
        differenceArray.push(...differenceMap[difference]);
    }
    
    return differenceArray;
 }
