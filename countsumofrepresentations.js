/*
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
*/

function countSumOfTwoRepresentations2(n, l, r) {
    //Keep track of number of working sums.
    count = 0;
    //Check if l or r are too large/small and adjust them if needed.
    if(l + r < n) {
        l = n - r;
    } else if(l + r > n) {
        r = n - l;
    }
    //Continue to narrow down l and r until they are equal or l is no longer less than r.
    while(l <= r) {
        count++;
        l++;
        r--;
    }
    return count;
}
