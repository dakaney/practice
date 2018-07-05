/*
Given a sorted array of n integers that has been rotated an unknown number of
times, give an O(log n) algorithm that finds an element in the array. You may assume
that the array was originally sorted in increasing order.
EXAMPLE:
Input: find 5 in array (15 16 19 20 25 1 3 4 5 7 10 14)
Output: 8 (the index of 5 in the array)
*/


//find midpoint of arr and see if it is bigger than value being searched
//if value is higher than 
function rotatedArr (arr, target) {
  let left = 0
  let right = arr.length-1;
 
  while (left <= right) {
    var midInd = Math.floor((left+right)/2);
    if(target === arr[midInd]){
      return midInd;
    }
 
    if(arr[midInd] <= arr[right]){ 
      if(target < arr[midInd] || target > arr[right]){
         right = midInd-1;
       } else {
         left = midInd+1; 
       }
    } else if(arr[midInd] >= arr[left] ) { 
      if(target>arr[midInd] || target < arr[left]){
        left = midInd+1;
      } else {
        right = midInd-1; 
      }
    }
  } 
  return -1;
}