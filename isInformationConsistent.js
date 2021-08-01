/*
Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:

I am sure he/she is guilty.
I am sure he/she is innocent.
I have no idea.
The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.
*/

function isInformationConsistent(evidences) {
    //Loop through each column and see if we see values of 1 and -1 simultaneously.
    for(let col = 0; col < evidences[0].length; col++) {
        //Loop through each witness (row) of this defendant (col).
        let foundGuilty = false;
        let foundInnocent = false;
        for(let row = 0; row < evidences.length; row++) {
            //Check if a guilty or innocent value is found.
            if(evidences[row][col] === -1) foundInnocent = true;
            if(evidences[row][col] === 1) foundGuilty = true;
            //If both innocent and guilty verdicts have been found, return false.
            if(foundGuilty && foundInnocent) return false;
        }
    }
    return true;
}
