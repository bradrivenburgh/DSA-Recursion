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

function allPathsMaze( m, col = 0, row = 0, solution = '' ) {
  // Base Case
  if (m[col][row] === 'e') {
    console.log(`Path to the exit: ${solution}`);
  } else if (m[col][row] === ' ') {
      //Recursive Case
      m[col][row] = '1';

      if (col < m.length - 1 && m[col + 1][row] != '*' ) {
        allPathsMaze(m, col + 1, row, solution + 'D');
      }
      if (col > 0 && m[col - 1][row] != '*') {
        allPathsMaze(m, col - 1, row, solution + 'U');
      }
      if (row > 0 && m[col][row - 1] != '*') {
        allPathsMaze(m, col, row - 1, solution + 'L');
      }
      if (row < m[col].length - 1 && m[col][row + 1] != '*') {
        allPathsMaze(m, col, row + 1, solution + 'R');
      }
      m[col][row] = ' '
  } 
  return " "
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

 console.log( allPathsMaze( myLargeMaze ) );
// console.log( allPathsMaze( mySmallMaze ) );
// console.log( allPathsMaze( myMicroMaze ) );
// console.log( allPathsMaze( myMedMaze ) );