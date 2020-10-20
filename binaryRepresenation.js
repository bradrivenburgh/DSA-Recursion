// Binary Representation
/*
What is the input to the program?
  A decimal number
What is the output of the program?
  A binary representation of that decimal number
What is the input to each recursive call?
  num divided by 2 (rounded to nearest int)
What is the output of each recursive call?
  The product of num % 2 + 10 and the returned value
  from  the previous instance of binary

https://www.geeksforgeeks.org/decimal-binary-number-using-recursion/

Write a recursive function that prints out the binary
representation of a given number. For example, the 
program should take 3 as an input and print 11 as output, 
or 25 as an input and print 11001 as an output. Note 
that the binary representation of 0 should be 0.
*/

function binary(num) {
  if (num === 0) {
    return 0;
  } else {
    return num % 2 + 10 * binary(Math.floor(num / 2));
  }
}

console.log(binary(3)); //11