/*
You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the total sum of all of the query outputs is maximized, and return this total sum.
*/

function maximumSum(a, q) {
    //Find q most frequent index.
    let qMap = {};
    q.forEach(range => {
        for(let i = range[0]; i <= range[1]; i++) {
            if(qMap[i]) {
                qMap[i]++;
            } else {
                qMap[i] = 1;
            }
        }
    });
    //Use this map data to create an array to be sorted and iterated over.
    let maxqVal = 0;
    let maxqIndex = 0;
    let qMapArray = [];
    for(let index in qMap) {
        qMapArray.push({
            "index": index,
            "count": qMap[index]
        });
        if(qMap[index] > maxqVal) {
            maxqVal = qMap[index];
            maxqIndex = index;
        }
    }   
    
    //Sort the starting array in order.
    a.sort((a, b) => a - b);
    
    //Sort the array containing the index occurences.
    qMapArray.sort((a, b) => b["count"] - a["count"]);
    
    //Next, sort the indexes in qMap so that one by one, the largest values in the array can be popped off and inserted at the next most frequent index.
    let arrayToSum = new Array(a.length).fill(0);
    
    //Start filling in the array to be summed up with the sorted values for maximal sum.
    while(qMapArray.length) {
        let thisIndex = qMapArray.shift();
        let nextLargestVal = a.pop();
        arrayToSum[thisIndex["index"]] = nextLargestVal;
    }
    
    //Fill in any remaining values that may exist in the original array.
    while(a.length) {
        let nextLargestVal = a.pop();
        for(let i = 0; i < arrayToSum.length; i++) {
            if(!arrayToSum[i]) arrayToSum[i] = nextLargestVal;
        }
    }
    
    //Loop through the sorted array and add up the ranges of sums.
    let maxSum = 0;
    q.forEach(range => {
        for(let i = range[0]; i <= range[1]; i++) {
            maxSum += arrayToSum[i];
        }
    });  
    
    return maxSum;
}
