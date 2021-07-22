/*
Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.
*/

function runnersMeetings(startPosition, speed) {
    let intersections = {};
    //Void helper function to see if two lines(people) will cross.
    const findIntersection = (speed1, speed2, start1, start2) => {
        //If the slopes are the same, return (this would result in x,y keys of +/- Infinity)
        if(speed1 - speed2 === 0) return;
        //Use y=mx+b to solve for x and y (set runners equal to each other, solve for x, then for y)
        let xVal = (start2 - start1) / (speed1 - speed2);
        let yVal = (speed1 * xVal) + start1;
        //If there is an intersection already marked, check to see if each runner is in the intersection's array already (to exclude duplicates)
        if(intersections[`${xVal},${yVal}`]) {
            if(!intersections[`${xVal},${yVal}`].includes(`${start1},${speed1}`)) {
                intersections[`${xVal},${yVal}`].push(`${start1},${speed1}`);
            }
            if(!intersections[`${xVal},${yVal}`].includes(`${start2},${speed2}`)) {
                intersections[`${xVal},${yVal}`].push(`${start2},${speed2}`);
            }
            //Otherwise, put both runners in the new array for this intersection.
        } else {
            intersections[`${xVal},${yVal}`] = [`${start1},${speed1}`, `${start2},${speed2}`];
        }
    };
    //Count number of meetings for each element using the helper function, except for when both indexes refer to the same runner.
    for(let i = 0; i < startPosition.length; i++) {
        for(let j = 0; j < startPosition.length; j++) {
            if(i === j) continue;
            findIntersection(speed[i], speed[j], startPosition[i], startPosition[j]);
        }
    }
    
    //If there are keys in the interseections object, return the array with the max intersecting runners.
    return Object.keys(intersections).length === 0 ? -1 : 
    Math.max(...Object.values(intersections).map(intersection => {
        return intersection.length;
    }));
}
