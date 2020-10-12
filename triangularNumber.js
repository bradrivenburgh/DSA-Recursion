// nth Triangular Number
/*
What is the input to the program?
  A number
What is the output of the program?
  The nth triangular number (sum of n natural number from 1 to n)
What is the input to each recursive call?
  An instance of triangularNumber with num decreased by one
What is the output of each recursive call?
  Num plus the return value of the previous triangularNumber instance
*/

// Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangularNumber(num) {
  // Base Case
  if (num === 0) {
    return num;
  }

  //Recursive Case
  return num + triangularNumber(num - 1);
}

console.log(triangularNumber(9));