/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
*/

var findRestaurant = function(list1, list2) {
    //Keep track of the shared restaurant(s) that have the least index sum.
    let shared = [];
    
    let leastIndexSum = Infinity;
    
    for(let i = 0; i < list1.length; i++) {
        if(list2.includes(list1[i])) {
            let indexSum = i + list2.indexOf(list1[i]);
            //If there isn't already a shared item, push this to the list.
            if(!shared.length) {
                shared.push(list1[i]);
                //Store this as the initial least index sum.
                leastIndexSum = indexSum;
            } else {
                //If there already is a shared item in the list, see if this one has a smaller index sum.
                if(indexSum < leastIndexSum) {
                    //If this index sum is the new smallest, replace the shared array with only this item, and update the least index sum.
                    shared = [list1[i]];
                    leastIndexSum = indexSum;
                } else if(indexSum === leastIndexSum) {
                    //If this index sum is equal to the current smallest, push it to the array.
                    shared.push(list1[i]);
                }
            }
        }
    }
    
    return shared;
};