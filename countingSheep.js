/** Questions to answer for each function
What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?
*/

// Counting Sheep
/*
What is the input to the program?
  Number of sheep I have
What is the output of the program?
  Count of all sheep that jumped over fence
What is the input to each recursive call?
  An instance of the countSheep function with 
  numSheep decreased by one as its argument
What is the output of each recursive call?
  An instance of countSheep

*/

function countingSheep(num) {
  // Base Case
  if (num === 0) {
    return "All sheep jumped over the fence"
  }

  //Recursive Case
  console.log(`${num}: Another sheep jumps over the fence`);
  return countingSheep(num - 1);
}

console.log(countingSheep(3));