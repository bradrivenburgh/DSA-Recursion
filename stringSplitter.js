// String Splitter
/*
What is the input to the program?
  An empty array, a string, and a delimiter character
What is the output of the program?
  An array with the text from the string 
  that were separated by the delimiter character
What is the input to each recursive call?
  An instance of stringSplitter the accumulated array,
  the string sans the split characters, and the delimiter char
What is the output of each recursive call?
  See directly above.
*/

function stringSplitter(array, string, delimiter) {
  // Base Case
  if (string.indexOf(delimiter) === -1) {
    array.push(string);
    return array;
  }

  //Recursive Case
  array.push( string.slice( 0, string.indexOf(delimiter) ) );
  string = string.slice( string.indexOf(delimiter) + 1 );

  return stringSplitter( array, string, delimiter );
}

console.log(stringSplitter([], "10/12/2020", "/"));
