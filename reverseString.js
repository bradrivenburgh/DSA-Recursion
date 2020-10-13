// Reverse String
/*
What is the input to the program?
  A string literal
What is the output of the program?
  The string characters in reverse order
What is the input to each recursive call?
  An instance of reverseString with the last 
  character of the string argument removed
What is the output of each recursive call?
  The last letter of the string the return value
  of the previous reverseString instance
*/

function reverseString(string) {
  // Base Case
  if (string.length === 0) {
    return string;
  }

  //Recursive Case
  return string[string.length - 1] + 
    reverseString( string.slice( 0, (string.length - 1) ) );
}

console.log(reverseString("thinkful"));