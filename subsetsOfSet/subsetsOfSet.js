/*
Write a method that returns all subsets of a set
*/

// input: array of elements
// output: combination of all elements from input
// edge: empty array, not an array

function subsetsOfSet (arr) {
  if (typeof arr !== 'object'){
    return -1;
  }
  if (arr.length <= 1) {
    return arr;
  } else if (arr.length === 2) {
    return [[arr[0]], [arr[1]], arr];
  } else {
    var reducedArr = arr.slice(0, arr.length - 1)
    var holder = subsetsOfSet(reducedArr);
    var result = holder.slice(0)
    result.push([arr[arr.length - 1]])
    for ( let i = 0; i < holder.length; i++) {
      let temp = holder[i].slice()
      temp.push(arr[arr.length - 1]);
      result.push(temp);
    }
  }
  return result;
}



subsetsOfSet([1,2,3,4])