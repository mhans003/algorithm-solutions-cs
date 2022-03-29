/*
You are given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
Return the number of operations required to make either num1 = 0 or num2 = 0.
*/

var countOperations = function(num1, num2) {
    //Count operations
    let operations = 0;
    
    //Iteratively subtract until one reaches 0.
    while(num1 > 0 && num2 > 0) {
        //If both numbers are the same value, subtracting one from the other results in 0. Return early counting this operation.
        if(num1 === num2) return operations + 1;
        
        //Subtract
        let difference = Math.abs(num1 - num2);
        
        //Assign this new value to the correct number.
        if(num1 > num2) {
            num1 = difference;
        } else {
            num2 = difference;
        }
        
        //Increment operations
        operations++;  
    }
    
    return operations;
};