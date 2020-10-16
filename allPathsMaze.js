// allPathsMaze
/*
What is the input to the program?
  An array of arrays, or N*M Matrix, the starting postion 
  (the col and row as numbers), and the empty solution string
What is the output of the program?
  The text sequence of Right(R) Left(L) Down(D) Up(U) to 
  get to the 'e' cell of the maze
What is the input to each recursive call?
  Instance of maze() with the maze, incremented / decremented
  col or row, and the solution string
What is the output of each recursive call?
  The solution string
*/
/*
For simplicity purpose, use the bottom right corner of the maze as the exit. 
You can't go outside the boundaries of the maze. The maze has passages that 
are blocked and you can't go through them. These blocked passages are 
indicated by *. Passing through a blocked cell as well as passing though a 
cell that you have already passed before are forbidden.

Find all solutions
*/

// Below reflects the maze.js before elminating the solution variable.
function allPathsMaze( m, col = 0, row = 0, solution = '' ) {
  // Base Case
  if (m[col][row] === 'e') {
    return solution;
  } else if (m[col][row] === ' ') {
      //Recursive Case
      m[col][row] = '1';
      
      if (col < m.length - 1 && (m[col + 1][row] === ' ' || m[col + 1][row] === 'e')  ) {
        solution += 'D'
        return allPathsMaze(m, col + 1, row, solution);
      }

      if (row < m[col].length - 1 && (m[col][row + 1] === ' ' || m[col][row + 1] === 'e') ) {
        solution += 'R'
        return allPathsMaze(m, col, row + 1, solution);
      }

      if (col > 0 && (m[col - 1][row] === ' ' || m[col - 1][row] === 'e') ) {
        solution += 'U'
        return allPathsMaze(m, col - 1, row, solution);
      }

      if (row > 0 && (m[col][row - 1] === ' ' || m[col][row - 1] === 'e') ) {
        solution += 'L'
        return allPathsMaze(m, col, row - 1, solution);
      }
  }
}

function allPathsMaze2( m, col = 0, row = 0, solution = '' ) {
  // Base Case
  if (m[col][row] === 'e') {
    // console.log('End solution: ', solution);
    // console.log('col, row: ', col, row);
    // console.log('m[col, row]: ', m[col, row]);    
    console.log(`Path to the exit: ${solution}`);
    return `Path to the exit: ${solution}`;
  } else if (m[col][row] === ' ') {
      //Recursive Case
      m[col][row] = '1';

      // console.log('solution: ', solution);
      // console.log('col, row: ', col, row);
      // console.log('m[col, row]: ', m[col, row]);
      
      if (col < m.length - 1 && m[col + 1][row] != '*' ) {
        allPathsMaze2(m, col + 1, row, solution + 'D');
      }

      if (row < m[col].length - 1 && m[col][row + 1] != '*') {
        allPathsMaze2(m, col, row + 1, solution + 'R');
      }

      if (col > 0 && m[col - 1][row] != '*') {
      console.log('solution: ', solution);
      console.log('col - 1, row: ', col - 1, row);
      console.log('m[col - 1, row]: ', m[col - 1, row]);        
        allPathsMaze2(m, col - 1, row, solution + 'U');
      }

      if (row > 0 && m[col][row - 1] != '*') {
        allPathsMaze2(m, col, row - 1, solution + 'L');
      }
  }

  return solution;
}

// RD
// DR
let myMicroMaze = [
  [' ', ' '],
  [' ', 'e'],
];

// RRDD
// DDRR
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRRRDD
// Path to the exit: RRDDRRUURRDDDD
// Check 4,2
let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// RDDLDDRRRR
// RDDRRRDD
// RDDRRUUR
let myMedMaze = [
  [' ', ' ', '*', ' ', 'e'],
  ['*', ' ', '*', ' ', '*'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', 'e'],
];

// console.log( allPathsMaze( myLargeMaze ) );

// console.log( allPathsMaze2( myLargeMaze ) );
// console.log( allPathsMaze2( mySmallMaze ) );
// console.log( allPathsMaze2( myMicroMaze ) );
console.log( allPathsMaze2( myMedMaze ) );