/*
Write a method to compute all permutations of a string.
*/

function strPerm (str) {
  if (str.length <= 1) {
    return str;
  } else if ( str.length === 2) {
    return [str[0] + str[1], str[1] + str[0]];
  } else {
    var current = strPerm(str.slice(0, str.length - 1))
    var currentChar = str.slice(str.length - 1)
    var results = []
    for (let i = 0; i < current.length; i++) {
      for (let j = 0; j <= current[0].length; j++) {
        let start = current[i].slice(0, j);
        let end = current[i].slice(j);
        results.push (start + currentChar + end);
      }
    }
  }
  return results;
}

strPerm('abc')