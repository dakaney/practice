/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column is set to 0.
*/

function firstProblem( matrix ) {
  var row = [];
  var col = [];
  for ( let i = 0; i < matrix.length; i++) {
    for ( let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for ( let i = 0; i < row.length; i++) {
    for ( let j = 0; j < matrix[i].length; j++) {
      matrix[row[i]][j] = 0;
    }
  }
  for ( let i = 0; i < col.length; i++) {
    for ( let j = 0; j < matrix.length; j++) {
      matrix[j][col[i]] = 0;
    }
  }
  
return matrix;
}

firstProblem([[1,1,1,1],
              [1,0,1,1],
              [1,1,1,1],
              [1,1,1,0]])