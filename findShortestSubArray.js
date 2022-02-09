/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
*/

var findShortestSubArray = function(nums) {
    //Get the 'degree info' for this array.
    let degreeInfo = getDegreeInfo(nums);
    
    //Store the shortest array with the same degree (start with initial array).
    let shortestArray = nums;
    
    degreeInfo.nums.forEach(num => {
        //For every number that occurs a 'degree' number of times, see which array is shortest. 
        let thisArray = nums.slice(nums.indexOf(num), nums.lastIndexOf(num) + 1);
        if(thisArray.length < shortestArray.length) shortestArray = thisArray;
    })
    
    return shortestArray.length;
    
    //Helper function to return degree of a sub-array.
    function getDegreeInfo(arr) {
        //Create a map to use to determine the degree.
        let arrMap = {};
        
        //Create the map with this array.
        for(let i = 0; i < arr.length; i++) {
            if(arrMap[arr[i]]) {
                arrMap[arr[i]]++;
            } else {
                arrMap[arr[i]] = 1;
            }
        }
        
        //Get the degree of this particular array.
        let max = Math.max(...Object.values(arrMap));
        
        //Save the numbers that are most common in the object map (all that have this degree).
        let mostCommon = [];
        
        //From the object map, save all numbers that appear this number of times (same as degree).
        for(let num in arrMap) {
            if(arrMap[num] === max) mostCommon.push(parseInt(num));
        }
        
        //Return object containing the numbers that occur the same number of times as the degree.
        return { "nums": mostCommon, "degree": max };
    }
};