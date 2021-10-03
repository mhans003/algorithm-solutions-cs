/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.
*/

function fileNaming(names) {
    //Store all names and see how many times they occur.
    let uniqueNames = {};
    for(let i = 0; i < names.length; i++) {
        let thisName = names[i];
        if(uniqueNames[thisName]) { 
            //If this name is already in the list, update the name with the appended number.
            let count = uniqueNames[thisName];
            
            //Make sure we are using a number that is not already part of a unique name itself.
            while(uniqueNames[`${thisName}(${count})`]) {
                count++;
            }
            
            //Once we have a unique name, update the number of times the original name appeared.
            //Also, update this current name and put it in the list of unique names.
            uniqueNames[thisName]++;
            thisName = `${thisName}(${count})`;
            uniqueNames[thisName] = 1;
        } else {
            //If this name as-is isn't already in the list, add it to the list.
            uniqueNames[thisName] = 1;
        }

        //Update this name in the array.
        names[i] = thisName;
    }
    
    //Return output with unique file names;
    return names;
}
