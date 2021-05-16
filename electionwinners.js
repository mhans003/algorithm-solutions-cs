/*
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
*/

function electionsWinners(votes, k) {
    //Find the number of votes needed to win.
    let votesToWin = Math.max(...votes);
    //Keep track of the number of candidates that will be eligible.
    let numberOfCandidates = 0;
    
    //If there are no voters left, we need to return 1 if there is 1 max, or return 0 if there are ties for the max number of votes.
    if(k === 0) {
        let numMax = 0;
        for(let i = 0; i < votes.length; i++) {
            if(votes[i] === votesToWin) numMax++;
            if(numMax > 1) return 0;
        }
        return 1;
    }
    
    //Otherwise, go through each candidate and see if adding the remaining votes would secure a win.
    votes.forEach(candidate => {
        if(candidate + k > votesToWin) numberOfCandidates++;
    });
    
    return numberOfCandidates;
}