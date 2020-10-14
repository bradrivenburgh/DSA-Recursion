// Factorial
/*
What is the input to the program?
  A number
What is the output of the program?
  The factorial of that number.
What is the input to each recursive call?
  The factorial of n - 1
What is the output of each recursive call?
  n - 1
*/
// The factorial of a number can be found by multiplying that 
// number by each number between itself and 1.

// For example, the factorial of 5:  5 * 4 * 3 * 2 * 1 = 120.

function factorial( n ) {
  // Base Case
  if (n === 0 || n === 1) {
    return 1;
  }

  //Recursive Case
  return factorial (n - 1) * n;
}

console.log( factorial( 5 ) );