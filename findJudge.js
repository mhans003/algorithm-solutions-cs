/*
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
*/

var findJudge = function(n, trust) {
    //Preliminary Conditions
    if(n < 2) {
        //If this is 1, only return a valid response 1 if there is no trust (1 is the judge).
        if(!trust.length) return 1;
        return -1;
    } else {
        //Otherwise, the trust array must be filled.
        if(!trust.length) return -1;
    }
    
    //Create a map of who trusts who.
    let trustMap = {};
    
    //See what people are represented in the trust array (first index) and keep track of who they trust.
    trust.forEach(person => {
        if(trustMap[person[0]]) {
            trustMap[person[0]].push(person[1]);
        } else {
            trustMap[person[0]] = [person[1]];
        }
    });
    
    //Find the total number of people represented in the trust map.
    let totalPeople = (n / 2) * (1 + n);
    
    //Use process of elimination to 'erase' all represented people from the total.
    Object.keys(trustMap).map(key => parseInt(key)).forEach(personNum => totalPeople -= personNum);
    
    //Since totalPeople should now contain the single individual who is the judge, check that all others trust this person.    
    if(Object.values(trustMap).every(thisPersonsTrust => thisPersonsTrust.includes(totalPeople))) {
        return totalPeople;
    }
    
    //If the above condition doesn't work, the two requirements are not met.
    return -1;
};