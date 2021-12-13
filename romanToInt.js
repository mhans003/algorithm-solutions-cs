/*
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

var romanToInt = function(s) {
    //IMPORTANT: Works up to 3,999
    
    //Keep track of number to be output:
    let output = [];
    
    //Get current number (for loop), based on what it is, run particular function
    for(let i = 0; i < s.length; i++) {
        //Determine which function to run 
        switch(s[i]) {
            case 'M':
                i = thousands(i);
                break;
            case 'C':
            case 'D':
                i = hundreds(i);
                break;
            case 'X':
            case 'L':
                i = tens(i);
                break;
            case 'I':
            case 'V':
                i = ones(i);
                break;
            default:
                break;
        }
    }
    
    //Return the appropriate number.
    console.log(output);
    return output.reduce((a, b) => a + b, 0);
    
    //Helper functions
    function thousands(startingIndex) {
        //See if this is 1, 2, or 3 thousand.
        let num = s[startingIndex + 2] === 'M' && s[startingIndex + 1] === 'M' ?
            3000 :
            s[startingIndex + 1] === 'M' ?
            2000 :
            1000;
        
        output.push(num);
        
        //Return the appropraite value of i
        return num === 3000 ? 
            startingIndex + 2 :
            num === 2000 ?
            startingIndex + 1 :
            startingIndex;
    }
    
    function hundreds(startingIndex) {
        //See which hundred this is.
        let num = "";
        if(s[startingIndex] === 'C') {
            //See if this is 1, 2, 3, 4, or 9 hundred.
            num = s[startingIndex + 2] === 'C' ?
                300 :
                s[startingIndex + 1] === 'C' ?
                200 :
                s[startingIndex + 1] === 'D' ?
                400 :
                s[startingIndex + 1] === 'M' ?
                900 :
                100;
        } else if(s[startingIndex] === 'D') {
            //See if this is 5, 6, 7, or 8 hundred.
            num = s[startingIndex + 3] === 'C' ?
                800 :
                s[startingIndex + 2] === 'C' ?
                700 :
                s[startingIndex + 1] === 'C' ?
                600 :
                500; 
        }
        
        output.push(num);
        
        //Return the appropriate value of i
        return num === 800 ?
            startingIndex + 3 :
            num === 300 || num === 700 ?
            startingIndex + 2 :
            num === 900 || num === 600 || num === 400 || num === 200 ?
            startingIndex + 1 :
            startingIndex;
    } 
    
    function tens(startingIndex) {
        //See what ten this is
        let num = "";
        if(s[startingIndex] === 'X') {
            num = s[startingIndex + 2] === 'X' ?
                30 :
                s[startingIndex + 1] === 'X' ?
                20 :
                s[startingIndex + 1] === 'L' ?
                40 :
                s[startingIndex + 1] === 'C' ?
                90 :
                10;
        } else if(s[startingIndex] === 'L') {
            num = s[startingIndex + 3] === 'X' ?
                80 :
                s[startingIndex + 2] === 'X' ?
                70 :
                s[startingIndex + 1] === 'X' ?
                60 :
                50; 
        }
        
        output.push(num);
        
        //Return the appropriate value of i
        return num === 80 ?
            startingIndex + 3 :
            num === 30 || num === 70 ?
            startingIndex + 2 :
            num === 90 || num === 60 || num === 40 || num === 20 ?
            startingIndex + 1 :
            startingIndex;
    } 
    
    function ones(startingIndex) {
        //See what one this is
        let num = "";
        if(s[startingIndex] === 'I') {
            num = s[startingIndex + 2] === 'I' ?
                3 :
                s[startingIndex + 1] === 'I' ?
                2 :
                s[startingIndex + 1] === 'V' ?
                4 :
                s[startingIndex + 1] === 'X' ?
                9 :
                1;
        } else if(s[startingIndex] === 'V') {
            num = s[startingIndex + 3] === 'I' ?
                8 :
                s[startingIndex + 2] === 'I' ?
                7 :
                s[startingIndex + 1] === 'I' ?
                6 :
                5; 
        }
        
        output.push(num);
        
        //Return the appropriate value of i
        return num === 8 ?
            startingIndex + 3 :
            num === 3 || num === 7 ?
            startingIndex + 2 :
            num === 9 || num === 6 || num === 4 || num === 2 ?
            startingIndex + 1 :
            startingIndex;
    }
};