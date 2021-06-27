/*
You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

All the numbers will then be written down in groups to the text file in such a way that:

the groups go one after another;
each non-empty group has a header which occupies one line;
each number in a group occupies one line.
Calculate how many lines the resulting text file will have.
*/

function numbersGrouping(a) {
    //Find how many numbers are in each group.
    let groupMap = {};
    a.forEach(number => {
        //Find the group number this number is part of, and use it as key.
        let groupNumber = Math.ceil(number / 10000);
        if(groupMap[groupNumber]) {
            groupMap[groupNumber]++;
        } else {
            groupMap[groupNumber] = 1;
        }
    });
    
    let total = 0;
    for(let group in groupMap) {
        //Add the number of numbers in this group.
        total += groupMap[group];
        //Add the heading.
        total++;
    }

    return total;
}
