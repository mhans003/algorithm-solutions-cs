/*
 Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

function makeArrayConsecutive2(statues) {
   
    let sorted = []; 
    for(let currentHeight = 0; currentHeight <= 20; currentHeight++) {
        statues.forEach((statue) => {
            if(statue === currentHeight) {
                sorted.push(statue); 
            }
        });   
    }
    
    let missing = 0; 
    for(let currentHeight = sorted[0]; currentHeight < sorted[sorted.length - 1]; currentHeight++) {
        let contains = false; 
        sorted.forEach((size) => {
            if(size === currentHeight) {
                contains = true; 
            }
        }); 
        if(contains === false) {
            missing++; 
        }
     
    }
    
    return missing;  
}
 