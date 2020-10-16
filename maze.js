// Maze
/*
What is the input to the program?
  An array of arrays, or N*M Matrix, the starting postion 
  (the col and row as numbers), and the empty solution string
What is the output of the program?
  The text sequence of Right(R) Left(L) Down(D) Up(U) to 
  get to the 'e' cell of the maze
What is the input to each recursive call?
  Instance of maze() with the maze, incremented / decremented
  col or row
What is the output of each recursive call?
  A character of the solution string and an instance of the function
*/
/*
For simplicity purpose, use the bottom right corner of the maze as the exit. 
You can't go outside the boundaries of the maze. The maze has passages that 
are blocked and you can't go through them. These blocked passages are 
indicated by *. Passing through a blocked cell as well as passing though a 
cell that you have already passed before are forbidden.
*/

function maze( m, col = 0, row = 0) {
  // Base Case
  if (m[col][row] === 'e') {
    return '';
  } else if (m[col][row] === ' ') {
      //Recursive Case
      m[col][row] = '1';
      
      if (col < m.length - 1 && (m[col + 1][row] === ' ' || m[col + 1][row] === 'e')  ) {
        return 'D' + maze(m, col + 1, row);
      }

      if (row < m[col].length - 1 && (m[col][row + 1] === ' ' || m[col][row + 1] === 'e') ) {
        return 'R' + maze(m, col, row + 1);
      }

      if (col > 0 && (m[col - 1][row] === ' ' || m[col - 1][row] === 'e') ) {
        return 'U' + maze(m, col - 1, row);
      }

      if (row > 0 && (m[col][row - 1] === ' ' || m[col][row - 1] === 'e') ) {
        return 'L' + maze(m, col, row - 1);
      }
  }
}

function maze2( m, col = 0, row = 0) {
  // Base Case
  if (m[col][row] === 'e') {
    return '';
  } else if (m[col][row] === ' ') {
      //Recursive Case
      m[col][row] = '1';
      
      // Is current column within maze constraints and not blocked
      if (col < m.length - 1 && m[col + 1][row] != '*') {
        return 'D' + maze2(m, col + 1, row);
      }

      // Is current row within column array length and not blocked
      if (row < m[col].length - 1 && m[col][row + 1] != '*') {
        return 'R' + maze2(m, col, row + 1);
      }

      if (col > 0 && m[col - 1][row] != '*') {
        return 'U' + maze2(m, col - 1, row);
      }

      if (row > 0 && m[col][row - 1] != '*') {
        return 'L' + maze2(m, col, row - 1);
      }
  }
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

// For the above maze, a possible exit path RRDDLLDDRRRRRR
let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//console.log( maze( myLargeMaze ) );
console.log( maze2( mySmallMaze ) );
console.log( maze2( myLargeMaze ) );