/*
Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).
*/

var mostVisited = function(n, rounds) {
    //Keep track of visited rounds.
    let visited = {};
    
    for(let i = 0; i < rounds.length - 1; i++) {
        let roundStart = rounds[i];
        let roundEnd = rounds[i + 1];
        
        //Count first sector on start.
        if(i === 0) visited[rounds[0]] = 1;
        
        //Count the sectors visited in this round
        if(roundStart <= roundEnd) {
            let thisSector = roundStart + 1;
            
            while(thisSector <= roundEnd) {
                //Count every sector in between the range
                if(visited[thisSector]) {
                    visited[thisSector]++;
                } else {
                    visited[thisSector] = 1;
                }
                
                thisSector++;
            }
        } else {
            let thisSector = 1;
            
            while(thisSector <= n) {
                //Include this sector if in the correct range.
                if(thisSector > roundStart || thisSector <= roundEnd) {
                    if(visited[thisSector]) {
                        visited[thisSector]++;
                    } else {
                        visited[thisSector] = 1;
                    }
                }
                
                thisSector++;
            }
        }
    }
        
    //Find most frequently visited number.
    let mostVisits = Math.max(...Object.values(visited));
    
    //Return the sector numbers visited the mostVisits number of times.
    return Object.keys(visited).filter(key => visited[key] === mostVisits).map(key => Number(key)).sort((a, b) => a - b);
};