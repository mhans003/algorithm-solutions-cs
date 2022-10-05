/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
    let map = {"even":[],"odd":[]};
   
    for(let i = 0; i < integers.length; i++) {
      if(integers[i] % 2 === 0) {
        map["even"].push(integers[i]);
      } else {
        map["odd"].push(integers[i]);
      }
    }
   
    if(map["even"].length === 1) return map["even"][0];
    return map["odd"][0];
}