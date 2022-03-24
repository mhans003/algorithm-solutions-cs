/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
*/

var intToRoman = function(num) {
    //This implementation only goes to 3,999.
    if(num > 3999) return "To Large (3,999 or less)";
    
    //Used to loop over each value, starting with smallest.
    let key = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['M', 'MM', 'MMM']
    ];
    
    let currentPlace = 0;
    let result = [];
    
    while(num) {
        //Get this integer value.
        let current = num % 10;
        
        //If this value is not empty (not zero), get corresponding value.
        if(current) {
            //Add this part of the roman number to the beginning of the result array.
            result.unshift(key[currentPlace][current - 1]);
        }
        
        //Update num (go up one place).
        num = Math.floor(num / 10);
        
        //Increment Place to use in key.
        currentPlace++;
    }
    
    //Return the result individual numbers joined together.
    return result.join("");
};