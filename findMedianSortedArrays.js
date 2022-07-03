/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let full = nums1.concat(nums2).sort((a, b) => a - b);
    
    //If the full array has an odd number of elements:
    if(full.length % 2 !== 0) {
        return full[Math.floor(full.length / 2)];
    }
    
    //Otherwise, find median of middle two numbers.
    return (full[Math.floor(full.length / 2)] + full[Math.floor(full.length / 2) - 1]) / 2;
};