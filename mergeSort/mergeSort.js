/*
You are given two sorted arrays, A and B, and A has a large enough buffer at the end
to hold B. Write a method to merge B into A in sorted order.
*/

function mergeSort (arrA, arrB) {
  let total = arrA.length - 1;
  let lenA = arrA.length - arrB.length - 1
  let lenB = arrB.length - 1;
  while (lenA >= 0 && lenB >= 0) {
    if (arrA[lenA] > arrB[lenB]) {
      arrA[total] = arrA[lenA];
      lenA--
    } else {
      arrA[total] = arrB[lenB];
      lenB--
    }
    total--
  }
  return arrA;
}

mergeSort ([1,3,5,7,'','','',''], [2,4,6,8])