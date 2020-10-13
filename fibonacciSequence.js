// Fibonacci Sequence
/*
What is the input to the program?
  A number greater than zero
What is the output of the program?
  An array with the Fibonacci sequence of a given number (the position in the sequence)
  e.g., for 7 it would be [1, 1, 2, 3, 5, 8, 13]
What is the input to each recursive call?

What is the output of each recursive call?

*/

// Fibonacci sequence: he sequence looks as follows: 1, 1, 2, 3, 5, 8, 13, 21, 34...

function fibonacciSequence( array, position ) {
  // Base Case
  if (array.length === position) {
    return array;
  }

  //Recursive Case
  return fibonacciSequence( array, position );
}

console.log( fibonacciSequence([], 7) );
