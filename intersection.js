//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    //Run function with correct parameters depending on which array has larger length.
    if(nums1.length > nums2.length) return findIntersections(nums1, nums2);
    return findIntersections(nums2, nums1);
    
    //Helper function looks through the larger array to find elements in the shorter array.
    function findIntersections(shorterArray, largerArray) {
        let intersections = [];
        for(let i = 0; i < shorterArray.length; i++) {
            //Unique new values (found in both arrays) are added as intersections.
            if(largerArray.includes(shorterArray[i]) && !intersections.includes(shorterArray[i])) {
                intersections.push(shorterArray[i]);
            }
        }
        return intersections;
    }
};