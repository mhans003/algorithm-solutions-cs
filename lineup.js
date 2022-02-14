/*
To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.
*/

function lineUp(commands) {
    let count = 0;
    let correct = "front";
    let incorrect = "front";
    for(let i = 0; i < commands.length; i++) {
        if(commands[i] === "L") {
            correct === "front" ? 
            correct = "left" : correct === "left" ? 
            correct = "back" : correct === "back" ? 
            correct = "right" : correct = "front";
            
            incorrect === "front" ? 
            incorrect = "right" : incorrect === "right" ? 
            incorrect = "back" : incorrect === "back" ? 
            incorrect = "left" : incorrect = "front"; 
        } else if(commands[i] === "R") {
            correct === "front" ? 
            correct = "right" : correct === "right" ? 
            correct = "back" : correct === "back" ? 
            correct = "left" : correct = "front";
            
            incorrect === "front" ? 
            incorrect = "left" : incorrect === "left" ? 
            incorrect = "back" : incorrect === "back" ? 
            incorrect = "right" : incorrect = "front"; 
        } else {
            correct === "front" ?
            correct = "back" : correct === "back" ?
            correct = "front" : correct === "left" ?
            correct = "right" : correct = "left";
            
            incorrect === "front" ?
            incorrect = "back" : incorrect === "back" ?
            incorrect = "front" : incorrect === "left" ?
            incorrect = "right" : incorrect = "left";
        }
        
        if(correct === incorrect) count++;
    }
    return count;
}