// Fibonacci Sequence
/*
What is the input to the program?
  A number greater than zero
What is the output of the program?
  Print the Fibonacci sequence of a given number
  e.g., for 7 it would be [0, 1, 1, 2, 3, 5, 8, 13, 21]
What is the input to each recursive call?
  An instance of the fibonacci function with n decreased by one
What is the output of each recursive call?
  n-1
*/

// Fibonacci sequence: the sequence looks as follows: 1, 1, 2, 3, 5, 8, 13, 21, 34...

function fibonacci(num ) {
  // Base Case
  if (num <= 1) {
    return [0, 1];
  }

  //Recursive Case
  let sequence = fibonacci(num - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
  return sequence;
}

console.log( fibonacci( 7 ) );