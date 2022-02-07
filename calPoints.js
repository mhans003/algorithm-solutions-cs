/*
You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record.
*/

var calPoints = function(ops) {
    let record = [];
    
    ops.forEach(op => {
        if(parseInt(op)) {
            //If this is a number, add new score to record in number form.
            record.push(parseInt(op));
        } else if(op === "C") {
            //If this is a C, clear the previous score.
            record.pop();
        } else if(op === "D") {
            //If this is a D, double the last score and add it.
            record.push(parseInt(record[record.length - 1] * 2));
        } else if(op === "+") {
            //If this is a +, combine the last two scores.
            record.push(parseInt(record[record.length - 1] + record[record.length - 2]));
        }
    });
    
    //Add up the records.    
    return record.reduce((a, b) => a += b, 0);
};