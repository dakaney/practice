/*
Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structures?
*/

// assumptions: not case sensitive
// input: string
// output: boolean, true if string is unique, false otherwise
// edge case: input is not a string

function uniqueStr (str) {
  if (typeof str === 'string') {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

uniqueStr('aba')